# Mono

Monorepo with Nx

## Generate app

    nx g @nrwl/angular:app ng-mono

## Generate a library

    nx g @nrwl/angular:lib core

Generate module in library

    cd libs/core

    nx g module src/lib/hello


## Miration update


        nx migrate @nrwl/workspace

        npm install

        nx migrate --run-migrations=migrations.json


## Ngrx


        nx add @ngrx/store@latest --project state --module state.module.ts --minimal false