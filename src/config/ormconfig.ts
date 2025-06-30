import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from '../users/user.entity';
import { CopyWallet } from '../copy-trading/entities/copy-wallet.entity';
import { CopyTrade } from '../copy-trading/entities/copy-trade.entity';
import { ProSignal } from '../copy-trading/entities/pro-signal.entity';

export default (): TypeOrmModuleOptions => ({
  type: (process.env.DB_TYPE as 'postgres' | 'mysql') || 'postgres',
  url: process.env.DATABASE_URL, // Ignores `host`, `port`, `username`, `password`, `database`
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  entities: [User, CopyWallet, CopyTrade, ProSignal],
  ssl: {
    rejectUnauthorized: false, // TODO: disable cert validation (okay for Railway, Heroku, etc.)
  },
  synchronize: true, // TODO: ✅ auto‑sync for dev; switch off in prod! (make false)
  ...(process.env.DB_TYPE === 'mysql' && {
    charset: 'utf8mb4', // full Unicode incl. emoji
    timezone: 'Z', // UTC; MySQL needs explicit tz
  }),
});
