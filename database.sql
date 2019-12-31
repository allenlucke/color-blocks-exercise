-- store the different color options
    CREATE TABLE "colors" (
        id SERIAL PRIMARY KEY,
        label VARCHAR(80) NOT NULL,
        hex_code VARCHAR(6)
    );

    -- store the color blocks that have been created
    CREATE TABLE "blocks" (
        id SERIAL PRIMARY KEY,
        color_id INT REFERENCES "colors"
    );

    -- pre-load some colors
    INSERT INTO "colors" ("label", "hex_code")
    VALUES ('Red', 'ff0000'),
        ('Yellow', 'ffff00'),
        ('Blue', '0000ff'),
        ('Green', '00ff00');
        
    -- pre-load some blocks for initial render
    INSERT INTO "blocks" ("color_id")
    VALUES (4),
        (3),
        (2),
        (1);