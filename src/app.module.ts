import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { TodoModule } from './todo/todo.module';
import {TypeOrmModule} from "@nestjs/typeorm";
import {DataSource} from "typeorm";

@Module({
  imports: [UserModule, TodoModule,
  TypeOrmModule.forRoot({
    type: 'mysql',
    host: '127.0.0.1',
    port: 8889,
    username: 'root',
    password: 'root',
    database: 'todos',
    autoLoadEntities:true,
    synchronize:true
  })]
})
export class AppModule {
  constructor(private dataSource: DataSource) {
  }
}
