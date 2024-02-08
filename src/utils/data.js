import myUnsplashImage from "../assets/my-unsplash.png";
import chatGroup from "./assets/projects/chat-group.png";
import myTaskBoard from "./assets/projects/my-task-board.png";

const projects = [
    {
        id: 1,
        name: "My Unsplash",
        description: "An image storage service, allowing users to manage and store selected sets of Unsplash images.",
        repository: "https://github.com/cVitorAndrade/myUnsplash",
        image: myUnsplashImage,
        design: "https://www.figma.com/file/a1xUD6nInLKRz6evFKKdir/My-unsplash?type=design&mode=design&t=hwiUw9dTPo6n2Wn1-0",
        deploy: "https://my-unsplash-six-weld.vercel.app/",
        platforms: [
            {
                id: 1,
                name: "Website",
                repository: "https://github.com/cVitorAndrade/myUnsplash/tree/master/web",
                technologies: [
                    {
                        id: 1,
                        name: "HTML",
                    },
                    {
                        id: 2,
                        name: "CSS",
                    },
                    {
                        id: 3,
                        name: "Javascript",
                    },
                    {
                        id: 4,
                        name: "React",
                    },
                    {
                        id: 5,
                        name: "Axios",
                    },
                    {
                        id: 6,
                        name: "React Router Dom",
                    },
                    {
                        id: 7,
                        name: "Styled Components",
                    },
                    {
                        id: 8,
                        name: "react Icons",
                    },
                    {
                        id: 9,
                        name: "Vite",
                    },
                ]
            },
            {
                id: 2,
                name: "API",
                repository: "https://github.com/cVitorAndrade/myUnsplash/tree/master/server",
                technologies: [
                    {
                        id: 10,
                        name: "Express"
                    },
                    {
                        id: 11,
                        name: "Knex"
                    },
                    {
                        id: 12,
                        name: "Bcryptjs"
                    },
                    {
                        id: 13,
                        name: "Express async errors"
                    },
                    {
                        id: 14,
                        name: "jsonwebtoken"
                    },
                    {
                        id: 15,
                        name: "sqlite"
                    },
                ]
            }
        ]
    },

    {
        id: 2,
        name: "Chat Group",
        description: "Everyone sends and receives text messages every day, this system consists of a chat application using sockets for real-time communication.",
        repository: "https://github.com/cVitorAndrade/chat-group",
        image: chatGroup,
        design: "https://www.figma.com/file/0oMeogZV0wD6Ml69HDrF66/Chat-Group?type=design&node-id=0-1&mode=design&t=hwiUw9dTPo6n2Wn1-0",
        platforms: [
            {
                id: 3,
                name: "Website",
                repository: "https://github.com/cVitorAndrade/chat-group/tree/master/web",
                technologies: [
                    {
                        id: 16,
                        name: "HTML",
                    },
                    {
                        id: 17,
                        name: "CSS",
                    },
                    {
                        id: 18,
                        name: "Javascript",
                    },
                    {
                        id: 19,
                        name: "React",
                    },
                    {
                        id: 20,
                        name: "Axios",
                    },
                    {
                        id: 21,
                        name: "Socket.io Client",
                    },
                    {
                        id: 22,
                        name: "React Router Dom",
                    },
                    {
                        id: 23,
                        name: "Styled Components",
                    },
                    {
                        id: 24,
                        name: "react Icons",
                    },
                    {
                        id: 25,
                        name: "Vite",
                    },

                ]
            },
            {
                id: 4,
                name: "API",
                repository: "https://github.com/cVitorAndrade/chat-group/tree/master/server",
                technologies: [
                    {
                        id: 26,
                        name: "Express"
                    },
                    {
                        id: 27,
                        name: "Socket.io"
                    },
                    {
                        id: 28,
                        name: "Knex"
                    },
                    {
                        id: 29,
                        name: "Bcryptjs"
                    },
                    {
                        id: 30,
                        name: "Express async errors"
                    },
                    {
                        id: 31,
                        name: "jsonwebtoken"
                    },
                    {
                        id: 32,
                        name: "sqlite"
                    },
                ]
            }

        ]
        
    },
    
    {
        id: 3,
        name: "My task board",
        description: "This challenge involved the creation of a full-stack task management application. A system that allows users to manage tasks and share their board, among other activities.",
        image: myTaskBoard,
        repository: "https://github.com/cVitorAndrade/my-task-board",
        platforms: [
            {
                id: 5,
                name: "Website",
                repository: "https://github.com/cVitorAndrade/my-task-board/tree/master/web",
                technologies: [
                    {
                        id: 33,
                        name: "HTML",
                    },
                    {
                        id: 34,
                        name: "CSS",
                    },
                    {
                        id: 35,
                        name: "Javascript",
                    },
                    {
                        id: 36,
                        name: "React",
                    },
                    {
                        id: 37,
                        name: "Axios",
                    },
                    {
                        id: 38,
                        name: "React Router Dom",
                    },
                    {
                        id: 39,
                        name: "Styled Components",
                    },
                    {
                        id: 40,
                        name: "react Icons",
                    },
                    {
                        id: 41,
                        name: "Vite",
                    },

                ]
            },
            {
                id: 6,
                name: "API",
                repository: "https://github.com/cVitorAndrade/my-task-board/tree/master/server",
                technologies: [
                    {
                        id: 42,
                        name: "Express"
                    },
                    {
                        id: 43,
                        name: "Knex"
                    },
                    {
                        id: 44,
                        name: "sqlite"
                    },
                ]
            }
        ]
    }
]

export { projects }