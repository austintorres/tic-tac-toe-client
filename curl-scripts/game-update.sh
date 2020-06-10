API="https://tic-tac-toe-api.herokuapp.com"

curl "${API}/games/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN} \
  --data '{
    "game": {
      "cell": {
        "index": 0,
        "value": "x"
      },
      "over": false
  }
}
  }'

  echo
