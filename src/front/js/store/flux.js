const getState = ({
    getStore,
    getActions,
    setStore
}) => {
    return {
        store: {
            message: null,
            demo: [{
                    title: "FIRST",
                    background: "white",
                    initial: "white",
                },
                {
                    title: "SECOND",
                    background: "white",
                    initial: "white",
                },
            ],
        },
        actions: {
            // Use getActions to call a function within a fuction
            exampleFunction: () => {
                getActions().changeColor(0, "green");
            },
            login: async (email, password) => {
                console.log(email, password);
                try {
                    // fetching data from the backend
                    const resp = await fetch(process.env.BACKEND_URL + "/api/login", {
                        method: "POST",
                        body: JSON.stringify({
                            email: email,
                            password: password,
                        }),
                        headers: {
                            "Content-Type": "application/json",
                        },
                    });
                    const data = await resp.json();
                    console.log(data);
                    // setStore({
                    //     message: data.message,
                    // });
                    // don't forget to return something, that is how the async resolves
                    return data;
                } catch (error) {
                    console.log("Error loading message from backend", error);
                }
            },
            createRequest: async (city, sector, description) => {
                console.log(city, sector, description);
            },

            createUser: async (name, lastname, email, password) => {
                console.log(name, lastname, email, password);
                try {
                    // fetching data from the backend
                    const resp = await fetch(
                        "https://3001-atxoupi-proyectofinalfi-xu8j8smzvjn.ws-eu54.gitpod.io/api/user_signup", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                                Accept: "application/json",
                            },
                            body: JSON.stringify({
                                name: name,
                                lastname: lastname,
                                email: email,
                                password: password,
                            }),
                        }
                    );
                    const data = await resp.text();
                    console.log(data);
                    // setStore({
                    //     message: data.message,
                    // });
                    // don't forget to return something, that is how the async resolves
                    return data;
                } catch (error) {
                    console.log("Error loading message from backend", error);
                }
            },
            createWorker: async (name, city, email, password, sector) => {
                // console.log(name, lastname, city, email, password, sector);
                // try {
                //     // fetching data from the backend
                //     const resp = await fetch(
                //         process.env.BACKEND_URL + "/api/worker_signup", {
                //             method: "POST",
                //             body: JSON.stringify({
                //                 name: name,
                //                 lastname: lastname,
                //                 city: city,
                //                 email: email,
                //                 password: password,
                //             }),
                //             headers: {
                //                 "Content-Type": "application/json",
                //             },
                //         }
                //     );
                //     const data = await resp.json();
                //     console.log(data);
                //     // setStore({
                //     //     message: data.message,
                //     // });
                //     // don't forget to return something, that is how the async resolves
                //     return data;
                // } catch (error) {
                //     console.log("Error loading message from backend", error);
                // }
                var myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/json");

                var raw = JSON.stringify({
                    name: name,
                    email: email,
                    password: password,
                    city: city,
                });

                var requestOptions = {
                    method: "POST",
                    headers: myHeaders,
                    body: raw,
                };

                fetch(
                        "https://3001-atxoupi-proyectofinalfi-xu8j8smzvjn.ws-eu54.gitpod.io/api/worker_signup",
                        requestOptions
                    )
                    .then((response) => response.json())
                    .then((result) => console.log(result))
                    .catch((error) => console.log("error", error));
            },
            getMessage: async () => {
                try {
                    // fetching data from the backend
                    const resp = await fetch(process.env.BACKEND_URL + "/api/hello");
                    const data = await resp.json();
                    setStore({
                        message: data.message,
                    });
                    // don't forget to return something, that is how the async resolves
                    return data;
                } catch (error) {
                    console.log("Error loading message from backend", error);
                }
            },
            changeColor: (index, color) => {
                //get the store
                const store = getStore();

                //we have to loop the entire demo array to look for the respective index
                //and change its color
                const demo = store.demo.map((elm, i) => {
                    if (i === index) elm.background = color;
                    return elm;
                });

                //reset the global store
                setStore({
                    demo: demo,
                });
            },
        },
    };
};

export default getState;