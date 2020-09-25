### This is an index of my GitHub Docker Project Build reports.

<!-- Raw
![Alt text](https://g.gravizo.com/svg?
digraph DevOps {
    node [color=Red,fontname=Courier,shape=box];
    edge [color=Blue, style=dashed];
    Git [URL="https://github.com/chris102994"]
    DockerRegistry [URL="https://hub.docker.com/repository/docker/christopher102994", label="Docker Registry"]
    ArchiveTestResults [URL="https://github.com/chris102994/chris102994.github.io", label="Archive Test Results"]

    Git -> Build
    
    subgraph cluster_AdminTools {
        compound = true;
        style=filled;
        color=lightgrey;
        URL = "https://travis-ci.com/github/chris102994"
        label = "Travis CI";
        Build
        Test
        Release

        Build -> Test
        Test -> Release

        rank=same{Build, Test, Release}
    }
    Release -> ArchiveTestResults
    Release -> DockerRegistry
    Release -> Git
}
)
-->

#### DevOps Graph:

![Alt text](https://g.gravizo.com/svg?%20digraph%20DevOps%20{%20%20%20%20%20node%20[color=Red,fontname=Courier,shape=box];%20%20%20%20%20edge%20[color=Blue,%20style=dashed];%20%20%20%20%20Git%20[URL=%22https://github.com/chris102994%22]%20%20%20%20%20DockerRegistry%20[URL=%22https://hub.docker.com/repository/docker/christopher102994%22,%20label=%22Docker%20Registry%22]%20%20%20%20%20ArchiveTestResults%20[URL=%22https://github.com/chris102994/chris102994.github.io%22,%20label=%22Archive%20Test%20Results%22]%20%20%20%20%20%20Git%20-%3E%20Build%20%20%20%20%20%20%20%20%20%20subgraph%20cluster_AdminTools%20{%20%20%20%20%20%20%20%20%20compound%20=%20true;%20%20%20%20%20%20%20%20%20style=filled;%20%20%20%20%20%20%20%20%20color=lightgrey;%20%20%20%20%20%20%20%20%20URL%20=%20%22https://travis-ci.com/github/chris102994%22%20%20%20%20%20%20%20%20%20label%20=%20%22Travis%20CI%22;%20%20%20%20%20%20%20%20%20Build%20%20%20%20%20%20%20%20%20Test%20%20%20%20%20%20%20%20%20Release%20%20%20%20%20%20%20%20%20%20Build%20-%3E%20Test%20%20%20%20%20%20%20%20%20Test%20-%3E%20Release%20%20%20%20%20%20%20%20%20%20rank=same{Build,%20Test,%20Release}%20%20%20%20%20}%20%20%20%20%20Release%20-%3E%20ArchiveTestResults%20%20%20%20%20Release%20-%3E%20DockerRegistry%20%20%20%20%20Release%20-%3E%20Git%20})

##### **Due to the GitHub API:**
* This page will take a while to load.
* If refresh is pressed repeatedly then you will exceed API limits to load the page for a period of time.
* AdBLock must be disabled to load this page.
