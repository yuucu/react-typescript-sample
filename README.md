
# memo

// create react app
docker-compose run --rm node sh -c 'npx create-react-app ${your_app} --template typescript'

// add material-ui
docker-compose run --rm node sh -c 'cd ${your_app} && yarn add @material-ui/core'
