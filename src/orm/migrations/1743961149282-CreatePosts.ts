import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreatePosts1743961149282 implements MigrationInterface {
  name = 'CreatePosts1743961149282';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE TABLE "posts" (
                "id" SERIAL NOT NULL,
                "title" character varying(64) NOT NULL,
                "description" character varying(64) NOT NULL,
                "created_at" TIMESTAMP NOT NULL DEFAULT now(),
                "updated_at" TIMESTAMP NOT NULL DEFAULT now(),
                CONSTRAINT "PK_2829ac61eff60fcec60d7274b9e" PRIMARY KEY ("id")
            )
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            DROP TABLE "posts"
        `);
  }
}
