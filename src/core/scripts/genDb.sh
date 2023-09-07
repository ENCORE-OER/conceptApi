npx ts-node ./src/core/migrations.ts && \
npx ts-node ./src/core/scripts/cleanCsv.ts ; \
sqlite3 encoreDB ".import --csv --skip 1 ./src/core/material/concepts_lexicon.csv concepts_lexicon" ; \
sqlite3 encoreDB ".import --csv --skip 1 ./src/core/tmp/OER_and_wiki_relationships_hyperlinks_NEW.csv oers_wiki" ; \
sqlite3 encoreDB ".import --csv --skip 1 ./src/core/tmp/encore_oers.csv encore_oers" ; \
sqlite3 encoreDB ".import --csv --skip 1 ./src/core/tmp/OER_and_concept_table.csv oers_concept" ; \
rm -r ./src/core/tmp