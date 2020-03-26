import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Course{
    @PrimaryGeneratedColumn()
    id: Number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    author: string;

}