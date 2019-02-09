const park = {
    name: "joonmo",
    gender: "male",
    age: 29
}

const resolvers = {
    Query: {
        park: () => park
    }
}

export default resolvers