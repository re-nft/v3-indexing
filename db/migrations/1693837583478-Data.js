module.exports = class Data1693837583478 {
    name = 'Data1693837583478'

    async up(db) {
        await db.query(`CREATE TABLE "block" ("id" character varying NOT NULL, "number" integer NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, CONSTRAINT "PK_d0925763efb591c2e2ffb267572" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_38414873c187a3e0c7943bc4c7" ON "block" ("number") `)
        await db.query(`CREATE INDEX "IDX_5c67cbcf4960c1a39e5fe25e87" ON "block" ("timestamp") `)
        await db.query(`CREATE TABLE "transaction" ("id" character varying NOT NULL, "block_number" integer, "block_timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "hash" text NOT NULL, "to" text, "from" text, "status" integer, CONSTRAINT "PK_89eadb93a89810556e1cbcd6ab9" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_2d99bb5a0ab5fb8cf8b746eb39" ON "transaction" ("block_number") `)
        await db.query(`CREATE INDEX "IDX_bf7f889412fc52430b609e70b4" ON "transaction" ("block_timestamp") `)
        await db.query(`CREATE INDEX "IDX_de4f0899c41c688529784bc443" ON "transaction" ("hash") `)
        await db.query(`CREATE INDEX "IDX_1713783ebe978fa2ae9654e4bb" ON "transaction" ("to") `)
        await db.query(`CREATE INDEX "IDX_290df3897fac99713afb5f3d7a" ON "transaction" ("from") `)
        await db.query(`CREATE INDEX "IDX_63f749fc7f7178ae1ad85d3b95" ON "transaction" ("status") `)
        await db.query(`CREATE TABLE "rental_factory_event_rental_safe_deployment" ("id" character varying NOT NULL, "block_number" integer NOT NULL, "block_timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "transaction_hash" text NOT NULL, "contract" text NOT NULL, "event_name" text NOT NULL, "safe" text NOT NULL, "rental_manager" text NOT NULL, "guard" text NOT NULL, "owner" text NOT NULL, "nonce" numeric NOT NULL, CONSTRAINT "PK_11953556bcc549e2ab3ab797b95" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_976ca4202b9ee7d0eb4a6584ed" ON "rental_factory_event_rental_safe_deployment" ("block_number") `)
        await db.query(`CREATE INDEX "IDX_4dbf2f7c0e359a9e85dd3cb027" ON "rental_factory_event_rental_safe_deployment" ("block_timestamp") `)
        await db.query(`CREATE INDEX "IDX_bac208890a97ca35166efde91e" ON "rental_factory_event_rental_safe_deployment" ("transaction_hash") `)
        await db.query(`CREATE INDEX "IDX_f183c2957f91a03a962325d2dc" ON "rental_factory_event_rental_safe_deployment" ("contract") `)
        await db.query(`CREATE INDEX "IDX_210599031edd0c23af9599c867" ON "rental_factory_event_rental_safe_deployment" ("event_name") `)
        await db.query(`CREATE TABLE "rental_manager_event_rental_started" ("id" character varying NOT NULL, "block_number" integer NOT NULL, "block_timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "transaction_hash" text NOT NULL, "contract" text NOT NULL, "event_name" text NOT NULL, "seaport_order_hash" text NOT NULL, "renter_wallet" text NOT NULL, "lender" text NOT NULL, "collection" text NOT NULL, "token_id" numeric NOT NULL, "fulfiller" text NOT NULL, "rent_end_timestamp" numeric NOT NULL, CONSTRAINT "PK_93c08cec0e4ef56f487e60ca192" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_49e64a6e6969e2f32402029987" ON "rental_manager_event_rental_started" ("block_number") `)
        await db.query(`CREATE INDEX "IDX_de3b2afb6b11b26e2073d9fff2" ON "rental_manager_event_rental_started" ("block_timestamp") `)
        await db.query(`CREATE INDEX "IDX_09553b1f7dcfbf210582944e3f" ON "rental_manager_event_rental_started" ("transaction_hash") `)
        await db.query(`CREATE INDEX "IDX_5b21bc0b603d2815115a589cf7" ON "rental_manager_event_rental_started" ("contract") `)
        await db.query(`CREATE INDEX "IDX_da6522085a7fcf12cbac7215d4" ON "rental_manager_event_rental_started" ("event_name") `)
        await db.query(`CREATE INDEX "IDX_e7fc3848caa18bdabf5d0c049b" ON "rental_manager_event_rental_started" ("seaport_order_hash") `)
        await db.query(`CREATE INDEX "IDX_4f5856879e432fd5ab4a9ac632" ON "rental_manager_event_rental_started" ("renter_wallet") `)
        await db.query(`CREATE INDEX "IDX_36043e4b164876651e5530e33a" ON "rental_manager_event_rental_started" ("lender") `)
        await db.query(`CREATE TABLE "rental_manager_event_rental_stopped" ("id" character varying NOT NULL, "block_number" integer NOT NULL, "block_timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "transaction_hash" text NOT NULL, "contract" text NOT NULL, "event_name" text NOT NULL, "seaport_order_hash" text NOT NULL, "renter_wallet" text NOT NULL, "lender" text NOT NULL, "collection" text NOT NULL, "token_id" numeric NOT NULL, "stopper" text NOT NULL, CONSTRAINT "PK_1c96a0fa06dd8c58980e1a15ebb" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_5fd8e32d8373bc88597adf8c80" ON "rental_manager_event_rental_stopped" ("block_number") `)
        await db.query(`CREATE INDEX "IDX_6032b6468b189df089ae95c211" ON "rental_manager_event_rental_stopped" ("block_timestamp") `)
        await db.query(`CREATE INDEX "IDX_a345aaacd5ba7f08ae41fdac84" ON "rental_manager_event_rental_stopped" ("transaction_hash") `)
        await db.query(`CREATE INDEX "IDX_6bea44535a9402e40b0f64fdf4" ON "rental_manager_event_rental_stopped" ("contract") `)
        await db.query(`CREATE INDEX "IDX_894c8edecd3784f52629be5c82" ON "rental_manager_event_rental_stopped" ("event_name") `)
        await db.query(`CREATE INDEX "IDX_b3265482f3ebf67335a7c2465c" ON "rental_manager_event_rental_stopped" ("seaport_order_hash") `)
        await db.query(`CREATE INDEX "IDX_5b2e1f5d88343b024105328d64" ON "rental_manager_event_rental_stopped" ("renter_wallet") `)
        await db.query(`CREATE INDEX "IDX_bd77a079cc7ed58dc92bc6e448" ON "rental_manager_event_rental_stopped" ("lender") `)
        await db.query(`CREATE TABLE "rental_manager_function_rent_from_zone" ("id" character varying NOT NULL, "block_number" integer NOT NULL, "block_timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "transaction_hash" text NOT NULL, "contract" text NOT NULL, "function_name" text NOT NULL, "function_value" numeric, "function_success" boolean, "payload" jsonb NOT NULL, "seaport_order_hash" text NOT NULL, "seaport_zone_hash" text NOT NULL, "offer" jsonb NOT NULL, "consideration" jsonb NOT NULL, "seaport_fulfiller" text NOT NULL, "offerer" text NOT NULL, "signature" text NOT NULL, CONSTRAINT "PK_e2f9da4cb432797ffd6b78e849d" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_3535e88a137a8666f5b627d79f" ON "rental_manager_function_rent_from_zone" ("block_number") `)
        await db.query(`CREATE INDEX "IDX_df8e2afc6cc0891886b708d874" ON "rental_manager_function_rent_from_zone" ("block_timestamp") `)
        await db.query(`CREATE INDEX "IDX_5d27f83cca0fb6dc07afab9ea0" ON "rental_manager_function_rent_from_zone" ("transaction_hash") `)
        await db.query(`CREATE INDEX "IDX_3127fdf6f868c19cd531954184" ON "rental_manager_function_rent_from_zone" ("contract") `)
        await db.query(`CREATE INDEX "IDX_acb6b7028b0b215f2fd823be10" ON "rental_manager_function_rent_from_zone" ("function_name") `)
        await db.query(`CREATE INDEX "IDX_991e4a69cc58311bbd56704866" ON "rental_manager_function_rent_from_zone" ("function_success") `)
        await db.query(`CREATE TABLE "rental_manager_function_set_zone" ("id" character varying NOT NULL, "block_number" integer NOT NULL, "block_timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "transaction_hash" text NOT NULL, "contract" text NOT NULL, "function_name" text NOT NULL, "function_value" numeric, "function_success" boolean, "new_zone" text NOT NULL, CONSTRAINT "PK_a457e38921e4d02bc787d3b4ed3" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_11d1a439a3ac65a59a34513265" ON "rental_manager_function_set_zone" ("block_number") `)
        await db.query(`CREATE INDEX "IDX_4884e226fc141c1dc759f61936" ON "rental_manager_function_set_zone" ("block_timestamp") `)
        await db.query(`CREATE INDEX "IDX_5ace6040692e21970b6f7aaad4" ON "rental_manager_function_set_zone" ("transaction_hash") `)
        await db.query(`CREATE INDEX "IDX_b88e6f6247bd5877a3896a4b2f" ON "rental_manager_function_set_zone" ("contract") `)
        await db.query(`CREATE INDEX "IDX_1aca3e4ce94bac3eab94ee9e68" ON "rental_manager_function_set_zone" ("function_name") `)
        await db.query(`CREATE INDEX "IDX_65fcf1c559532e58affaf1b1ad" ON "rental_manager_function_set_zone" ("function_success") `)
    }

    async down(db) {
        await db.query(`DROP TABLE "block"`)
        await db.query(`DROP INDEX "public"."IDX_38414873c187a3e0c7943bc4c7"`)
        await db.query(`DROP INDEX "public"."IDX_5c67cbcf4960c1a39e5fe25e87"`)
        await db.query(`DROP TABLE "transaction"`)
        await db.query(`DROP INDEX "public"."IDX_2d99bb5a0ab5fb8cf8b746eb39"`)
        await db.query(`DROP INDEX "public"."IDX_bf7f889412fc52430b609e70b4"`)
        await db.query(`DROP INDEX "public"."IDX_de4f0899c41c688529784bc443"`)
        await db.query(`DROP INDEX "public"."IDX_1713783ebe978fa2ae9654e4bb"`)
        await db.query(`DROP INDEX "public"."IDX_290df3897fac99713afb5f3d7a"`)
        await db.query(`DROP INDEX "public"."IDX_63f749fc7f7178ae1ad85d3b95"`)
        await db.query(`DROP TABLE "rental_factory_event_rental_safe_deployment"`)
        await db.query(`DROP INDEX "public"."IDX_976ca4202b9ee7d0eb4a6584ed"`)
        await db.query(`DROP INDEX "public"."IDX_4dbf2f7c0e359a9e85dd3cb027"`)
        await db.query(`DROP INDEX "public"."IDX_bac208890a97ca35166efde91e"`)
        await db.query(`DROP INDEX "public"."IDX_f183c2957f91a03a962325d2dc"`)
        await db.query(`DROP INDEX "public"."IDX_210599031edd0c23af9599c867"`)
        await db.query(`DROP TABLE "rental_manager_event_rental_started"`)
        await db.query(`DROP INDEX "public"."IDX_49e64a6e6969e2f32402029987"`)
        await db.query(`DROP INDEX "public"."IDX_de3b2afb6b11b26e2073d9fff2"`)
        await db.query(`DROP INDEX "public"."IDX_09553b1f7dcfbf210582944e3f"`)
        await db.query(`DROP INDEX "public"."IDX_5b21bc0b603d2815115a589cf7"`)
        await db.query(`DROP INDEX "public"."IDX_da6522085a7fcf12cbac7215d4"`)
        await db.query(`DROP INDEX "public"."IDX_e7fc3848caa18bdabf5d0c049b"`)
        await db.query(`DROP INDEX "public"."IDX_4f5856879e432fd5ab4a9ac632"`)
        await db.query(`DROP INDEX "public"."IDX_36043e4b164876651e5530e33a"`)
        await db.query(`DROP TABLE "rental_manager_event_rental_stopped"`)
        await db.query(`DROP INDEX "public"."IDX_5fd8e32d8373bc88597adf8c80"`)
        await db.query(`DROP INDEX "public"."IDX_6032b6468b189df089ae95c211"`)
        await db.query(`DROP INDEX "public"."IDX_a345aaacd5ba7f08ae41fdac84"`)
        await db.query(`DROP INDEX "public"."IDX_6bea44535a9402e40b0f64fdf4"`)
        await db.query(`DROP INDEX "public"."IDX_894c8edecd3784f52629be5c82"`)
        await db.query(`DROP INDEX "public"."IDX_b3265482f3ebf67335a7c2465c"`)
        await db.query(`DROP INDEX "public"."IDX_5b2e1f5d88343b024105328d64"`)
        await db.query(`DROP INDEX "public"."IDX_bd77a079cc7ed58dc92bc6e448"`)
        await db.query(`DROP TABLE "rental_manager_function_rent_from_zone"`)
        await db.query(`DROP INDEX "public"."IDX_3535e88a137a8666f5b627d79f"`)
        await db.query(`DROP INDEX "public"."IDX_df8e2afc6cc0891886b708d874"`)
        await db.query(`DROP INDEX "public"."IDX_5d27f83cca0fb6dc07afab9ea0"`)
        await db.query(`DROP INDEX "public"."IDX_3127fdf6f868c19cd531954184"`)
        await db.query(`DROP INDEX "public"."IDX_acb6b7028b0b215f2fd823be10"`)
        await db.query(`DROP INDEX "public"."IDX_991e4a69cc58311bbd56704866"`)
        await db.query(`DROP TABLE "rental_manager_function_set_zone"`)
        await db.query(`DROP INDEX "public"."IDX_11d1a439a3ac65a59a34513265"`)
        await db.query(`DROP INDEX "public"."IDX_4884e226fc141c1dc759f61936"`)
        await db.query(`DROP INDEX "public"."IDX_5ace6040692e21970b6f7aaad4"`)
        await db.query(`DROP INDEX "public"."IDX_b88e6f6247bd5877a3896a4b2f"`)
        await db.query(`DROP INDEX "public"."IDX_1aca3e4ce94bac3eab94ee9e68"`)
        await db.query(`DROP INDEX "public"."IDX_65fcf1c559532e58affaf1b1ad"`)
    }
}