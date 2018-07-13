# npm starter module, written in Typescript

This is a repo that you can use and customize to create your own npm modules using Typescript.

## Setup

#### 1. Clone the Repository

```sh
git clone --origin=starter --branch=starter https://github.com/TyGuy/ts-npm-starter new-project-name
cd new-project-name
git checkout --orphan master
```

#### 2. Make sure things work

```sh
npm install
npm run build
```

#### 3. Push to your new remote, set up as your thing

```sh
git remote add origin git@github.com:my-username/my-project.git
# customize package.json, or run `npm init`
git commit -am "First commit"
```
