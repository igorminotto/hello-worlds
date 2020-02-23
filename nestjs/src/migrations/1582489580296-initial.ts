import { MigrationInterface, QueryRunner } from 'typeorm';

export class initial1582489580296 implements MigrationInterface {
  name = 'initial1582489580296';

  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      'CREATE TABLE `note` (`id` int NOT NULL AUTO_INCREMENT, `title` varchar(255) NOT NULL, `body` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB',
      undefined,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query('DROP TABLE `note`', undefined);
  }
}
