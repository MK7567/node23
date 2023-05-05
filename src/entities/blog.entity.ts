import {Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn, JoinColumn} from "typeorm";
import {Category} from "./category.entity";
import {User} from "./user.entity";

@Entity('blogs')
export class Blog {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @ManyToOne(() => User, (user: User) => user.blogs)
    @JoinColumn({name: 'user_id'})
    user: User;

    @ManyToOne(() => Category, (category: Category) => category.blogs)
    @JoinColumn({name: 'category_id'})
    category: Category;
}
