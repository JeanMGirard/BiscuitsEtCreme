
INSERT INTO categories (name, ref)
VALUES ("Slush", "slush");

SET @ctg_slush = SELECT id FROM categories WHERE ref = "slush";

INSERT INTO products (name, category_id, description, status)
VALUES 
("Pomme Grenade", 21, "Pomme Grenade", 1),
("Framboise", 21, "Pomme Grenade", 1),
("Fraise", 21, "Pomme Grenade", 1),
("Raisin", 21, "Pomme Grenade", 1),
("Pomme Grenade", 21, "Pomme Grenade", 1),
("Pomme Grenade", 21, "Pomme Grenade", 1),
("Pomme Grenade", 21, "Pomme Grenade", 1),
("Pomme Grenade", 21, "Pomme Grenade", 1),
("Pomme Grenade", 21, "Pomme Grenade", 1),
("Pomme Grenade", 21, "Pomme Grenade", 1),
("Pomme Grenade", 21, "Pomme Grenade", 1),
("Pomme Grenade", 21, "Pomme Grenade", 1),
("Pomme Grenade", 21, "Pomme Grenade", 1),
("Pomme Grenade", 21, "Pomme Grenade", 1),
("Pomme Grenade", 21, "Pomme Grenade", 1),
("Pomme Grenade", 21, "Pomme Grenade", 1),
("Pomme Grenade", 21, "Pomme Grenade", 1),
("Pomme Grenade", 21, "Pomme Grenade", 1),
("Pomme Grenade", 21, "Pomme Grenade", 1),
("Pomme Grenade", 21, "Pomme Grenade", 1),
("Pomme Grenade", 21, "Pomme Grenade", 1),
("Pomme Grenade", 21, "Pomme Grenade", 1),
("Pomme Grenade", 21, "Pomme Grenade", 1),
("Pomme Grenade", 21, "Pomme Grenade", 1),
("Pomme Grenade", 21, "Pomme Grenade", 1),
("Pomme Grenade", 21, "Pomme Grenade", 1),
("Pomme Grenade", 21, "Pomme Grenade", 1),
("Pomme Grenade", 21, "Pomme Grenade", 1),
("Pomme Grenade", 21, "Pomme Grenade", 1),
("Pomme Grenade", 21, "Pomme Grenade", 1)