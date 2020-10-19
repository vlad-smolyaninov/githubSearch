export const getRepoList = async ({ params, ...options }) => {
    const queryParams = new URLSearchParams(params);

    const response = await fetch(
        'https://api.github.com/search/repositories?' + queryParams,
        options
    );
    return await response.json();
}

