import { setContext } from "@apollo/client/link/context";
import { ApolloClient, from, InMemoryCache, HttpLink } from '@apollo/client';

const authLink = setContext((_, { headers }) => {
    const userStr = localStorage.getItem("user");
    const user = userStr && JSON.parse(userStr);
 	return {
		headers: {
			...headers,
			authorization: user?.token ? `Bearer ${user?.token}` : "",
		},
	};
});

const httpLink = new HttpLink({
	uri: "http://localhost:5000/graphql",
});

export const client = new ApolloClient({
	link: from([authLink, httpLink]),
	cache: new InMemoryCache(),
});
