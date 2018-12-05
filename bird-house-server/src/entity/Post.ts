import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable} from "typeorm";
import {Category} from "./Category";

@Entity()
export class Post {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column("text")
    text: string;

    @Column("photo1")
    photo1: string;

    @Column("photo2")
    photo2: string;

    @Column("photo3")
    photo3: string;

    @Column("photo4")
    photo4: string;

    @Column("photo5")
    photo5: string;

    @ManyToMany(type => Category, {
        cascade: true
    })
    @JoinTable()
    categories: Category[];

}
