API="https://tic-tac-toe-api.herokuapp.com"

curl "${API}/games/${ID}" \
  --include \
  --request GET \
  --header "Authorization: Token token=${TOKEN} \

echo
