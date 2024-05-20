export async function GithubData() {
    var list = await fetch("https://api.github.com/users/evandro-ribeiro/repos")
    .then(res => res.json())
    .then(jsonResult => {
        var list = jsonResult.map((item: any) => ({title: item.name, url: item.html_url}));
        console.log(list);
        return list;
    })
    .catch(error => console.log(error))
    return list;
}
