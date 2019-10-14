import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    age: number;

    @Column({ length: 25 })
    fullName: string;

    @Column('date')
    birthday: Date;

    @Column()
    isActive: boolean;
}
