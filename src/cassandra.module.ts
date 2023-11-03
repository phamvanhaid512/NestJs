// // cassandra.module.ts
// import { Module } from '@nestjs/common';
// import { Client } from 'cassandra-driver';

// @Module({
//   providers: [
//     {
//       provide: 'CASSANDRA',
//       useFactory: () => {
//         return new Client({
//           contactPoints: ['localhost '], // Thay thế bằng địa chỉ máy chủ Cassandra thực tế
//           localDataCenter: 'datacenter1', // Thay thế bằng tên data center thực tế
//         });
//       },
//     },
//   ],
//   exports: ['CASSANDRA'],
// })
// export class CassandraModule {}
