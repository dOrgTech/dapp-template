# dOrg dApp Template
dApp Template, based on create-react-app. Features:

* Typescript
* Web3React
* Read-only fallback provider when no account logged in
* Mobx state management
* Tracking pending and successful TX
* Respond to metamask signature rejections
* 'Subscribe' to certain blockchain data on each block
* Fetch / retry / staleness evaluation for blockchain data fetches

## Instructions

### Installation
- Install dependencies
    ```
    yarn
    ```


### Start App
- As per create-react-app
    ```
    yarn start
    ```

### Test
- No front-end tests at the moment. (Jest is included for testing React components).
    ```
    yarn test
    ```
    
### Build For Production
- Full dApp build will live in /build folder.
    ```
    yarn build
    ```
