from algoliasearch.search_client import SearchClient

# Use an API key with `listIndexes` ACL
client = SearchClient.create("KE1FUW1TY5", "b1be477b6510690af0a2f9962eb50a50")
indices = client.list_indices()["items"]

print(indices)