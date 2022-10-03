angular.module("Games").controller("GamesController", ($scope)=>{

    $scope.games = [

        {
            name: 'Lineage II',
            image: 'https://cdn.ncwest.com/cms/5mwbzg43/220413-an-news-header-18th-anniversary.jpg',
            synopsis: "Step into the role of a legendary warrior seeking to find his place in the midst of battle! Lineage II brings you into an expansive MMORPG experience where you create your own destiny in the realm of Aden. Prepare yourself for an adventure as you engage in colossal PvP siege battles, join epic raid encounters, build your own clan of allies, or raise your own stable of pets and mounts to traverse the epic Lineage II world!",
            url:"https://www.lineage2.com/en-us",
            played: false,
            id:1
        },
        {
            name: 'League of Legends',
            image: 'https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_LeagueofLegends_RiotGames_S1_2560x1440-ee500721c06da3ec1e5535a88588c77f',
            synopsis: "League of Legends é um jogo de estratégia em que duas equipes de cinco poderosos Campeões se enfrentam para destruir a base uma da outra. Escolha entre mais de 140 Campeões para realizar jogadas épicas, assegurar abates e destruir torres conforme você luta até a vitória.",
            url:"https://www.leagueoflegends.com/pt-br/",
            played: false,
            id:2     
        },
        {
            name: 'Priston Tale',
            image: 'https://images4.alphacoders.com/691/thumb-1920-691230.jpg',
            synopsis: "Conhecido como um dos mais tradicionais jogos online disponíveis no mercado, o Priston Tale nasceu na Coreia do Sul em 2000 fruto do trabalho do desenvolvedor Kenny Zee. O jogo está enquadrado no tipo MMO, o que significa que milhares de pessoas se divertem ao mesmo tempo em um mundo virtual.",
            url:"https://zenit.games/priston/",
            played: false,
            id:3  
        },
        {
            name: 'Counter Strike: Global Offensive',
            image: 'https://arenaesports.com.br/wp-content/uploads/2018/07/Counter-Strike-Global-Offensive-requisistos-m%C3%ADnimos.jpg',
            synopsis: "O Counter-Strike: Global Offensive (CS:GO) melhora a jogabilidade de ação baseada em equipes na qual foi pioneiro quando lançado há 19 anos. O CS:GO contém novos mapas, personagens e armas, além de contar com versões atualizadas de conteúdos do CS clássico (como de_dust2).",
            url:"https://store.steampowered.com/app/730/CounterStrike_Global_Offensive/",
            played: false,
            id:4
            
        }
    ]

    $scope.user = {
        id: 1,
        name: "Paradise",
        points: 0,
    }

    $scope.played = (id)=>{
        $scope.user.points+= 5;
        $scope.games.forEach(game => {
            if(game.id == id){
                game.played = true;
            }
        });

        console.log("chamou played")
        console.log($scope.user.points);
        
       
        const toastPoints = document.getElementById('liveToast')       
        const toast = new bootstrap.Toast(toastPoints)
        toast.show()
        
    }
})