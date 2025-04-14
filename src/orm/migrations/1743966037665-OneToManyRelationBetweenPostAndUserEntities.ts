import { MigrationInterface, QueryRunner } from 'typeorm';

export class OneToManyRelationBetweenPostAndUserEntities1743966037665 implements MigrationInterface {
  name = 'OneToManyRelationBetweenPostAndUserEntities1743966037665';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            ALTER TABLE "posts"
            ADD "user_id" integer
        `);
    await queryRunner.query(`
            ALTER TABLE "users" DROP CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3"
        `);
    await queryRunner.query(`
            ALTER TABLE "users" DROP COLUMN "email"
        `);
    await queryRunner.query(`
            ALTER TABLE "users"
            ADD "email" character varying NOT NULL
        `);
    await queryRunner.query(`
            ALTER TABLE "users"
            ADD CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email")
        `);
    await queryRunner.query(`
            ALTER TABLE "users" DROP CONSTRAINT "UQ_fe0bb3f6520ee0469504521e710"
        `);
    await queryRunner.query(`
            ALTER TABLE "users" DROP COLUMN "username"
        `);
    await queryRunner.query(`
            ALTER TABLE "users"
            ADD "username" character varying
        `);
    await queryRunner.query(`
            ALTER TABLE "users"
            ADD CONSTRAINT "UQ_fe0bb3f6520ee0469504521e710" UNIQUE ("username")
        `);
    await queryRunner.query(`
            ALTER TABLE "users" DROP COLUMN "name"
        `);
    await queryRunner.query(`
            ALTER TABLE "users"
            ADD "name" character varying
        `);
    await queryRunner.query(`
            ALTER TABLE "posts"
            ADD CONSTRAINT "FK_c4f9a7bd77b489e711277ee5986" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            ALTER TABLE "posts" DROP CONSTRAINT "FK_c4f9a7bd77b489e711277ee5986"
        `);
    await queryRunner.query(`
            ALTER TABLE "users" DROP COLUMN "name"
        `);
    await queryRunner.query(`
            ALTER TABLE "users"
            ADD "name" character varying(40)
        `);
    await queryRunner.query(`
            ALTER TABLE "users" DROP CONSTRAINT "UQ_fe0bb3f6520ee0469504521e710"
        `);
    await queryRunner.query(`
            ALTER TABLE "users" DROP COLUMN "username"
        `);
    await queryRunner.query(`
            ALTER TABLE "users"
            ADD "username" character varying(40)
        `);
    await queryRunner.query(`
            ALTER TABLE "users"
            ADD CONSTRAINT "UQ_fe0bb3f6520ee0469504521e710" UNIQUE ("username")
        `);
    await queryRunner.query(`
            ALTER TABLE "users" DROP CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3"
        `);
    await queryRunner.query(`
            ALTER TABLE "users" DROP COLUMN "email"
        `);
    await queryRunner.query(`
            ALTER TABLE "users"
            ADD "email" character varying(100) NOT NULL
        `);
    await queryRunner.query(`
            ALTER TABLE "users"
            ADD CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email")
        `);
    await queryRunner.query(`
            ALTER TABLE "posts" DROP COLUMN "user_id"
        `);
  }
}
