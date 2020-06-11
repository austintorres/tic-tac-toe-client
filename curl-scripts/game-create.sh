API="https://tic-tac-toe-api.herokuapp.com"

curl "${API}/games" \
  --include \
  --request POST \
  --header "Content-type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data
  }

echo
