export async function get({ params }) {
    const nest = params.nest;

    if (nest) {
        return {
            body: { nest }
        };
    }

    return {
        status: 404
    };
}
