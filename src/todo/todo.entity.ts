import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {User} from "../user/user.entity";

@Entity()
export class Todo{

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    title:string;

    @Column("text")
    description:string;

    @Column({default:false})
    is_completed:boolean;

    @Column("datetime")
    created_at:string;

    @Column({type : "datetime",nullable: true})
    completed_at:string;

    @ManyToOne(() => User,(user: User) =>user.todos)
    user: User

}