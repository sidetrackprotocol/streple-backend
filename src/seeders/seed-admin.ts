// import { CopyWallet } from '@app/copy-trading/entities/copy-wallet.entity';
// import { User } from '@app/users/entity';
// import { Role } from '@app/users/interface';
// import * as bcrypt from 'bcrypt';
// import * as dotenv from 'dotenv';
// import { DataSource } from 'typeorm';
// dotenv.config();

// if (!process.env.ADMIN_EMAIL) {
//   throw new Error();
// }

// const dataSource = new DataSource({
//   type: (process.env.DB_TYPE as 'postgres' | 'mysql') || 'postgres',
//   url: process.env.DATABASE_URL, // Ignores `host`, `port`, `username`, `password`, `database`
//   host: process.env.DB_HOST,
//   port: Number(process.env.DB_PORT),
//   username: process.env.DB_USER,
//   password: process.env.DB_PASS,
//   database: process.env.DB_NAME,
//   entities: [User, CopyWallet],
//   ssl: {
//     rejectUnauthorized: false, // TODO: disable cert validation (okay for Railway, Heroku, etc.)
//   },
//   synchronize: true,
// });

// async function seed() {
//   await dataSource.initialize();
//   const repo = dataSource.getRepository(User);

//   const exists = await repo.findOneBy({
//     email: process.env.ADMIN_EMAIL as string,
//   });
//   if (exists) {
//     console.log('Admin already exists.');
//     process.exit();
//   }

//   const admin = repo.create({
//     fullName: process.env.ADMIN_FULL_NAME as string,
//     email: process.env.ADMIN_EMAIL as string,
//     // Make sure its is a strong password { minLength: 8, minLowercase: 1, minNumbers: 1, minSymbols: 1, minUppercase: 1 }
//     password: await bcrypt.hash(process.env.ADMIN_PASSWORD as string, 10),
//     isVerified: true,
//     otpVerified: true,
//     role: Role.superAdmin,
//   });

//   await repo.save(admin);
//   console.log('✅ Super Admin account created successfully');
//   process.exit();
// }

// // HOW TO RUN: `npx ts-node src/seed/seed-admin.ts`
// seed();
