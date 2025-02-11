import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreationCapacitySharingEntities1726841140836
  implements MigrationInterface
{
  name = 'CreationCapacitySharingEntities1726841140836';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`session_formats\` (\`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`created_by\` bigint NULL, \`updated_at\` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`updated_by\` bigint NULL, \`is_active\` tinyint NOT NULL DEFAULT 1, \`session_format_id\` bigint NOT NULL AUTO_INCREMENT, \`name\` text NOT NULL, PRIMARY KEY (\`session_format_id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`degrees\` (\`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`created_by\` bigint NULL, \`updated_at\` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`updated_by\` bigint NULL, \`is_active\` tinyint NOT NULL DEFAULT 1, \`degree_id\` bigint NOT NULL AUTO_INCREMENT, \`name\` text NOT NULL, PRIMARY KEY (\`degree_id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`session_lengths\` (\`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`created_by\` bigint NULL, \`updated_at\` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`updated_by\` bigint NULL, \`is_active\` tinyint NOT NULL DEFAULT 1, \`session_length_id\` bigint NOT NULL AUTO_INCREMENT, \`name\` text NOT NULL, PRIMARY KEY (\`session_length_id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`gender\` (\`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`created_by\` bigint NULL, \`updated_at\` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`updated_by\` bigint NULL, \`is_active\` tinyint NOT NULL DEFAULT 1, \`gender_id\` bigint NOT NULL AUTO_INCREMENT, \`name\` text NOT NULL, PRIMARY KEY (\`gender_id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`session_purposes\` (\`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`created_by\` bigint NULL, \`updated_at\` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`updated_by\` bigint NULL, \`is_active\` tinyint NOT NULL DEFAULT 1, \`session_purpose_id\` bigint NOT NULL AUTO_INCREMENT, \`name\` text NOT NULL, PRIMARY KEY (\`session_purpose_id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`delivery_modalities\` (\`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`created_by\` bigint NULL, \`updated_at\` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`updated_by\` bigint NULL, \`is_active\` tinyint NOT NULL DEFAULT 1, \`delivery_modality_id\` bigint NOT NULL AUTO_INCREMENT, \`name\` text NOT NULL, PRIMARY KEY (\`delivery_modality_id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`result_capacity_sharing\` (\`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`created_by\` bigint NULL, \`updated_at\` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`updated_by\` bigint NULL, \`is_active\` tinyint NOT NULL DEFAULT 1, \`result_id\` bigint NOT NULL, \`supervisor_name\` text NULL, \`supervisor_email\` text NULL, \`training_title\` text NULL, \`session_format_id\` bigint NULL, \`session_type_id\` bigint NULL, \`degree_id\` bigint NULL, \`gender_id\` bigint NULL, \`session_length_id\` bigint NULL, \`session_purpose_id\` bigint NULL, \`session_purpose_description\` text NULL, \`session_participants_male\` bigint NULL, \`session_participants_female\` bigint NULL, \`session_participants_non_binary\` bigint NULL, \`session_description\` text NULL, \`is_attending_organization\` tinyint NULL, \`start_date\` timestamp NULL, \`end_date\` timestamp NULL, \`delivery_modality_id\` bigint NULL, \`language_id\` bigint NULL, PRIMARY KEY (\`result_id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`session_types\` (\`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`created_by\` bigint NULL, \`updated_at\` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`updated_by\` bigint NULL, \`is_active\` tinyint NOT NULL DEFAULT 1, \`session_type_id\` bigint NOT NULL AUTO_INCREMENT, \`name\` text NOT NULL, PRIMARY KEY (\`session_type_id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`clarisa_regions\` (\`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`created_by\` bigint NULL, \`updated_at\` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`updated_by\` bigint NULL, \`is_active\` tinyint NOT NULL DEFAULT 1, \`um49Code\` bigint NOT NULL, \`name\` text NOT NULL, PRIMARY KEY (\`um49Code\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`result_regions\` (\`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`created_by\` bigint NULL, \`updated_at\` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`updated_by\` bigint NULL, \`is_active\` tinyint NOT NULL DEFAULT 1, \`result_region_id\` bigint NOT NULL AUTO_INCREMENT, \`result_id\` bigint NOT NULL, \`region_id\` bigint NOT NULL, PRIMARY KEY (\`result_region_id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`clarisa_countries\` (\`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`created_by\` bigint NULL, \`updated_at\` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`updated_by\` bigint NULL, \`is_active\` tinyint NOT NULL DEFAULT 1, \`code\` bigint NOT NULL, \`isoAlpha2\` varchar(3) NOT NULL, \`isoAlpha3\` varchar(4) NOT NULL, \`name\` text NOT NULL, \`longitude\` decimal(8,4) NOT NULL, \`latitude\` decimal(8,4) NOT NULL, PRIMARY KEY (\`code\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`clarisa_sub_nationals\` (\`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`created_by\` bigint NULL, \`updated_at\` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`updated_by\` bigint NULL, \`is_active\` tinyint NOT NULL DEFAULT 1, \`id\` bigint NOT NULL, \`code\` text NOT NULL, \`name\` text NOT NULL, \`definition\` varchar(3) NULL, \`language_iso_2\` varchar(3) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`result_countries_sub_nationals\` (\`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`created_by\` bigint NULL, \`updated_at\` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`updated_by\` bigint NULL, \`is_active\` tinyint NOT NULL DEFAULT 1, \`result_country_sub_national_id\` bigint NOT NULL AUTO_INCREMENT, \`result_country_id\` bigint NOT NULL, \`sub_national_id\` bigint NOT NULL, PRIMARY KEY (\`result_country_sub_national_id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`result_countries\` (\`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`created_by\` bigint NULL, \`updated_at\` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`updated_by\` bigint NULL, \`is_active\` tinyint NOT NULL DEFAULT 1, \`result_country_id\` bigint NOT NULL AUTO_INCREMENT, \`result_id\` bigint NOT NULL, \`country_id\` bigint NOT NULL, PRIMARY KEY (\`result_country_id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`clarisa_languages\` (\`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`created_by\` bigint NULL, \`updated_at\` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`updated_by\` bigint NULL, \`is_active\` tinyint NOT NULL DEFAULT 1, \`id\` bigint NOT NULL, \`name\` text NULL, \`iso_alpha_2\` text NOT NULL, \`iso_alpha_3\` text NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`result_languages\` (\`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`created_by\` bigint NULL, \`updated_at\` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`updated_by\` bigint NULL, \`is_active\` tinyint NOT NULL DEFAULT 1, \`result_language_id\` bigint NOT NULL AUTO_INCREMENT, \`result_id\` bigint NOT NULL, \`language_id\` bigint NOT NULL, PRIMARY KEY (\`result_language_id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`result_keywords\` (\`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`created_by\` bigint NULL, \`updated_at\` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`updated_by\` bigint NULL, \`is_active\` tinyint NOT NULL DEFAULT 1, \`result_keyword_id\` bigint NOT NULL AUTO_INCREMENT, \`result_id\` bigint NOT NULL, \`keyword\` text NOT NULL, PRIMARY KEY (\`result_keyword_id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`clarisa_institution_types\` (\`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`created_by\` bigint NULL, \`updated_at\` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`updated_by\` bigint NULL, \`is_active\` tinyint NOT NULL DEFAULT 1, \`code\` bigint NOT NULL, \`name\` text NOT NULL, \`description\` text NULL, \`parent_code\` bigint NULL, PRIMARY KEY (\`code\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`clarisa_institutions\` (\`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`created_by\` bigint NULL, \`updated_at\` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`updated_by\` bigint NULL, \`is_active\` tinyint NOT NULL DEFAULT 1, \`code\` bigint NOT NULL, \`name\` text NOT NULL, \`acronym\` text NULL, \`websiteLink\` text NULL, \`added\` timestamp NOT NULL, \`institution_type_id\` bigint NOT NULL, PRIMARY KEY (\`code\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`result_institutions\` (\`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`created_by\` bigint NULL, \`updated_at\` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`updated_by\` bigint NULL, \`is_active\` tinyint NOT NULL DEFAULT 1, \`result_institution_id\` bigint NOT NULL AUTO_INCREMENT, \`result_id\` bigint NOT NULL, \`institution_id\` bigint NOT NULL, PRIMARY KEY (\`result_institution_id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`user_roles\` (\`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`created_by\` bigint NULL, \`updated_at\` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`updated_by\` bigint NULL, \`is_active\` tinyint NOT NULL DEFAULT 1, \`user_role_id\` bigint NOT NULL AUTO_INCREMENT, \`name\` text NOT NULL, PRIMARY KEY (\`user_role_id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`result_users\` (\`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`created_by\` bigint NULL, \`updated_at\` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`updated_by\` bigint NULL, \`is_active\` tinyint NOT NULL DEFAULT 1, \`result_user_id\` bigint NOT NULL AUTO_INCREMENT, \`result_id\` bigint NOT NULL, \`user_id\` bigint NOT NULL, \`role_id\` bigint NOT NULL, PRIMARY KEY (\`result_user_id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`result_evidences\` (\`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`created_by\` bigint NULL, \`updated_at\` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`updated_by\` bigint NULL, \`is_active\` tinyint NOT NULL DEFAULT 1, \`result_evidence_id\` bigint NOT NULL AUTO_INCREMENT, \`result_id\` bigint NOT NULL, \`evidence_description\` text NOT NULL, \`evidence_url\` text NOT NULL, \`evidence_role_id\` text NOT NULL, PRIMARY KEY (\`result_evidence_id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`evidence_roles\` (\`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`created_by\` bigint NULL, \`updated_at\` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`updated_by\` bigint NULL, \`is_active\` tinyint NOT NULL DEFAULT 1, \`evidence_role_id\` bigint NOT NULL AUTO_INCREMENT, \`name\` text NOT NULL, PRIMARY KEY (\`evidence_role_id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `ALTER TABLE \`result_levers\` DROP FOREIGN KEY \`FK_e1fc97f82440f07c53e8b4876e8\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`result_levers\` DROP COLUMN \`lever_id\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`result_levers\` ADD \`lever_id\` varchar(20) NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`result_capacity_sharing\` ADD CONSTRAINT \`FK_7a30a2908ad8624acdd7e4b1290\` FOREIGN KEY (\`session_format_id\`) REFERENCES \`session_formats\`(\`session_format_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`result_capacity_sharing\` ADD CONSTRAINT \`FK_5bf7ce7434769329c2185fedc40\` FOREIGN KEY (\`session_type_id\`) REFERENCES \`session_types\`(\`session_type_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`result_capacity_sharing\` ADD CONSTRAINT \`FK_ba19954fabad107fc1d149c0ea0\` FOREIGN KEY (\`degree_id\`) REFERENCES \`degrees\`(\`degree_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`result_capacity_sharing\` ADD CONSTRAINT \`FK_1ac9d698d5a1ad1a68c21d64a01\` FOREIGN KEY (\`gender_id\`) REFERENCES \`gender\`(\`gender_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`result_capacity_sharing\` ADD CONSTRAINT \`FK_2c6dfc989f6f2b32a09fd7412ee\` FOREIGN KEY (\`session_length_id\`) REFERENCES \`session_lengths\`(\`session_length_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`result_capacity_sharing\` ADD CONSTRAINT \`FK_e9cbb55da974c91a7e279ac0df2\` FOREIGN KEY (\`session_purpose_id\`) REFERENCES \`session_purposes\`(\`session_purpose_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`result_capacity_sharing\` ADD CONSTRAINT \`FK_533c5c7ca762de78889ea58f1c6\` FOREIGN KEY (\`delivery_modality_id\`) REFERENCES \`delivery_modalities\`(\`delivery_modality_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`result_levers\` ADD CONSTRAINT \`FK_e1fc97f82440f07c53e8b4876e8\` FOREIGN KEY (\`lever_id\`) REFERENCES \`clarisa_levers\`(\`code\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`result_regions\` ADD CONSTRAINT \`FK_78da652c2448d576166d9996149\` FOREIGN KEY (\`result_id\`) REFERENCES \`results\`(\`result_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`result_regions\` ADD CONSTRAINT \`FK_7b3acd83a1ef704fbc99f1a8b82\` FOREIGN KEY (\`region_id\`) REFERENCES \`clarisa_regions\`(\`um49Code\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`result_countries_sub_nationals\` ADD CONSTRAINT \`FK_eaf0151a4a0acf4530130aa2b1d\` FOREIGN KEY (\`result_country_id\`) REFERENCES \`result_countries\`(\`result_country_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`result_countries_sub_nationals\` ADD CONSTRAINT \`FK_9c1736d35295f1aa95dfc979d60\` FOREIGN KEY (\`sub_national_id\`) REFERENCES \`clarisa_sub_nationals\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`result_countries\` ADD CONSTRAINT \`FK_33a287aea9bff277ec713f53d6b\` FOREIGN KEY (\`result_id\`) REFERENCES \`results\`(\`result_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`result_countries\` ADD CONSTRAINT \`FK_3b5e965129613725a0048539618\` FOREIGN KEY (\`country_id\`) REFERENCES \`clarisa_countries\`(\`code\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`result_languages\` ADD CONSTRAINT \`FK_d6d367a06450fd6ff450f4772cf\` FOREIGN KEY (\`result_id\`) REFERENCES \`results\`(\`result_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`result_languages\` ADD CONSTRAINT \`FK_f2d8235737587e8b9f9298a0237\` FOREIGN KEY (\`language_id\`) REFERENCES \`clarisa_languages\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`result_keywords\` ADD CONSTRAINT \`FK_052c641afdd57cc49af5ad695fe\` FOREIGN KEY (\`result_id\`) REFERENCES \`results\`(\`result_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`clarisa_institution_types\` ADD CONSTRAINT \`FK_5bb4b590a7a2fa58ebd39e6289d\` FOREIGN KEY (\`parent_code\`) REFERENCES \`clarisa_institution_types\`(\`code\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`clarisa_institutions\` ADD CONSTRAINT \`FK_c487f2dfe9069367da65076d0c4\` FOREIGN KEY (\`institution_type_id\`) REFERENCES \`clarisa_institution_types\`(\`code\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`result_institutions\` ADD CONSTRAINT \`FK_9f384bc37a87859d6a6c91e64de\` FOREIGN KEY (\`result_id\`) REFERENCES \`results\`(\`result_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`result_institutions\` ADD CONSTRAINT \`FK_1ad3779da86ab196adf876c4b96\` FOREIGN KEY (\`institution_id\`) REFERENCES \`clarisa_institutions\`(\`code\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`result_users\` ADD CONSTRAINT \`FK_f8cbbf90686d2db058efb2038f8\` FOREIGN KEY (\`result_id\`) REFERENCES \`results\`(\`result_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`result_users\` ADD CONSTRAINT \`FK_a8c22201e59c45cc7f55975e7dd\` FOREIGN KEY (\`role_id\`) REFERENCES \`user_roles\`(\`user_role_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`result_users\` DROP FOREIGN KEY \`FK_a8c22201e59c45cc7f55975e7dd\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`result_users\` DROP FOREIGN KEY \`FK_f8cbbf90686d2db058efb2038f8\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`result_institutions\` DROP FOREIGN KEY \`FK_1ad3779da86ab196adf876c4b96\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`result_institutions\` DROP FOREIGN KEY \`FK_9f384bc37a87859d6a6c91e64de\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`clarisa_institutions\` DROP FOREIGN KEY \`FK_c487f2dfe9069367da65076d0c4\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`clarisa_institution_types\` DROP FOREIGN KEY \`FK_5bb4b590a7a2fa58ebd39e6289d\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`result_keywords\` DROP FOREIGN KEY \`FK_052c641afdd57cc49af5ad695fe\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`result_languages\` DROP FOREIGN KEY \`FK_f2d8235737587e8b9f9298a0237\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`result_languages\` DROP FOREIGN KEY \`FK_d6d367a06450fd6ff450f4772cf\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`result_countries\` DROP FOREIGN KEY \`FK_3b5e965129613725a0048539618\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`result_countries\` DROP FOREIGN KEY \`FK_33a287aea9bff277ec713f53d6b\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`result_countries_sub_nationals\` DROP FOREIGN KEY \`FK_9c1736d35295f1aa95dfc979d60\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`result_countries_sub_nationals\` DROP FOREIGN KEY \`FK_eaf0151a4a0acf4530130aa2b1d\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`result_regions\` DROP FOREIGN KEY \`FK_7b3acd83a1ef704fbc99f1a8b82\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`result_regions\` DROP FOREIGN KEY \`FK_78da652c2448d576166d9996149\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`result_levers\` DROP FOREIGN KEY \`FK_e1fc97f82440f07c53e8b4876e8\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`result_capacity_sharing\` DROP FOREIGN KEY \`FK_533c5c7ca762de78889ea58f1c6\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`result_capacity_sharing\` DROP FOREIGN KEY \`FK_e9cbb55da974c91a7e279ac0df2\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`result_capacity_sharing\` DROP FOREIGN KEY \`FK_2c6dfc989f6f2b32a09fd7412ee\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`result_capacity_sharing\` DROP FOREIGN KEY \`FK_1ac9d698d5a1ad1a68c21d64a01\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`result_capacity_sharing\` DROP FOREIGN KEY \`FK_ba19954fabad107fc1d149c0ea0\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`result_capacity_sharing\` DROP FOREIGN KEY \`FK_5bf7ce7434769329c2185fedc40\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`result_capacity_sharing\` DROP FOREIGN KEY \`FK_7a30a2908ad8624acdd7e4b1290\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`result_levers\` DROP COLUMN \`lever_id\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`result_levers\` ADD \`lever_id\` varchar(255) NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`result_levers\` ADD CONSTRAINT \`FK_e1fc97f82440f07c53e8b4876e8\` FOREIGN KEY (\`lever_id\`) REFERENCES \`clarisa_levers\`(\`code\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(`DROP TABLE \`evidence_roles\``);
    await queryRunner.query(`DROP TABLE \`result_evidences\``);
    await queryRunner.query(`DROP TABLE \`result_users\``);
    await queryRunner.query(`DROP TABLE \`user_roles\``);
    await queryRunner.query(`DROP TABLE \`result_institutions\``);
    await queryRunner.query(`DROP TABLE \`clarisa_institutions\``);
    await queryRunner.query(`DROP TABLE \`clarisa_institution_types\``);
    await queryRunner.query(`DROP TABLE \`result_keywords\``);
    await queryRunner.query(`DROP TABLE \`result_languages\``);
    await queryRunner.query(`DROP TABLE \`clarisa_languages\``);
    await queryRunner.query(`DROP TABLE \`result_countries\``);
    await queryRunner.query(`DROP TABLE \`result_countries_sub_nationals\``);
    await queryRunner.query(`DROP TABLE \`clarisa_sub_nationals\``);
    await queryRunner.query(`DROP TABLE \`clarisa_countries\``);
    await queryRunner.query(`DROP TABLE \`result_regions\``);
    await queryRunner.query(`DROP TABLE \`clarisa_regions\``);
    await queryRunner.query(`DROP TABLE \`session_types\``);
    await queryRunner.query(`DROP TABLE \`result_capacity_sharing\``);
    await queryRunner.query(`DROP TABLE \`delivery_modalities\``);
    await queryRunner.query(`DROP TABLE \`session_purposes\``);
    await queryRunner.query(`DROP TABLE \`gender\``);
    await queryRunner.query(`DROP TABLE \`session_lengths\``);
    await queryRunner.query(`DROP TABLE \`degrees\``);
    await queryRunner.query(`DROP TABLE \`session_formats\``);
  }
}
