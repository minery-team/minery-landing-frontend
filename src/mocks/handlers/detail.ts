import { rest } from "msw";

const productsDetailHandler = [
  rest.get(
    "https://6trd8f6686.execute-api.ap-northeast-2.amazonaws.com/live/wine/top10",
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json([
          {
            _id: "141779",
            order: 141779,
            name: "부르겐란드, 아이스 와인",
            enName: "Burgenland, Ice Wine",
            rate: 0,
            image:
              "https://wine21.speedgabia.com/WINE_MST/TITLE/0141000/0141779.jpg",
            country: "오스트리아",
            type: 1,
            minAlcohol: 10.2,
            maxAlcohol: 10.2,
            sweetness: 5,
            acidity: 3,
            price: 0,
            body: 3,
            tannins: 1,
            searchable: true,
            maker: "와인 앤 코메스  Wine and Commerce",
            style: null,
            rating: null,
            ferment: null,
            minTemperature: 6,
            maxTemperature: 8,
            foods: ["과일로 만든 디저트 및 소프트 치즈 등과 잘 어울린다."],
            importer: null,
            rates: [[Object]],
            id: 141779,
          },
          {
            _id: "168387",
            order: 168387,
            name: "아바찌아, 모스까토 다스티",
            enName: "Abbazia, Moscato d'asti",
            rate: 0,
            image:
              "https://wine21.speedgabia.com/WINE_MST/IMAGE/0168000/T0168387_001.png",
            country: "이탈리아",
            type: 1,
            minAlcohol: 5,
            maxAlcohol: 6,
            sweetness: 3,
            acidity: 3,
            price: 38000,
            body: 2,
            tannins: 1,
            searchable: true,
            maker: "아바찌아  Abbazia",
            style: null,
            rating: null,
            ferment: null,
            minTemperature: 8,
            maxTemperature: 10,
            foods: [
              "각종 디저트류(케잌",
              " 떡",
              " 패스츄리)",
              " 신선한 회",
              " 매운 한국음식 (떡볶이) 등과 잘 어울린다.",
            ],
            importer: "와인토피아&nbsp;&nbsp;&nbsp;",
            rates: [[Object], [Object], [Object]],
            id: 168387,
          },
          {
            _id: "139406",
            order: 139406,
            name: "도츠, 브뤼 밀레짐",
            enName: "Deutz, Brut Millesime",
            rate: 0,
            image:
              "https://wine21.speedgabia.com/WINE_MST/TITLE/0139000/0139406.png",
            country: "프랑스",
            type: 3,
            minAlcohol: 12,
            maxAlcohol: 13,
            sweetness: 1,
            acidity: 5,
            price: 250000,
            body: 2,
            tannins: 1,
            searchable: true,
            maker: "도츠   Deutz [Champagne Deutz]",
            style: null,
            rating: "Champagne AOC(AOP)",
            ferment: null,
            minTemperature: 7,
            maxTemperature: 8,
            foods: [
              "식전주",
              " 흰 살코기( 특히 크리미한 송아지 고기)",
              " 화이트 트러플 리조또",
              " 강한 향의 생선(아귀",
              " 참치",
              " 가오리 등)과도 잘 어울린다.",
            ],
            importer: "레뱅드매일&nbsp;&nbsp;&nbsp;",
            rates: [[Object]],
            id: 139406,
          },
          {
            _id: "153688",
            order: 153688,
            name: "발디비에소 싱글 빈야드 카베르네 프랑 ",
            enName: "Valdivieso Single Vineyard Cabernet Franc",
            rate: 0,
            image:
              "https://wine21.speedgabia.com/WINE_MST/TITLE/0153000/0153688.jpg",
            country: "칠레",
            type: 0,
            minAlcohol: 14.5,
            maxAlcohol: 14.5,
            sweetness: 1,
            acidity: 4,
            price: 90000,
            body: 4,
            tannins: 3,
            searchable: true,
            maker: "발디비에소  Valdivieso",
            style: null,
            rating: null,
            ferment: null,
            minTemperature: 16,
            maxTemperature: 18,
            foods: ["진한소스의 스테이크 요리"],
            importer: null,
            rates: [[Object]],
            id: 153688,
          },
          {
            _id: "162096",
            order: 162096,
            name: "루스토, 아몬띠야도 로스 아르코스 솔레라 레세르바",
            enName: "Lustau, Amontillado Los Arcos Solera Reserva",
            rate: 0,
            image:
              "https://wine21.speedgabia.com/WINE_MST/TITLE/0162000/0162096.jpg",
            country: "스페인",
            type: 4,
            minAlcohol: 18.5,
            maxAlcohol: 18.5,
            sweetness: 1,
            acidity: 2,
            price: 35000,
            body: 5,
            tannins: 2,
            searchable: true,
            maker: "루스토  Lustau",
            style: "Spanish Sherry",
            rating: null,
            ferment: null,
            minTemperature: 14,
            maxTemperature: 16,
            foods: ["식전주로 마시거나 치즈", " 견과류", " 버섯요리"],
            importer: "신세계엘앤비&nbsp;&nbsp;&nbsp;",
            rates: [[Object]],
            id: 162096,
          },
          {
            _id: "138436",
            order: 138436,
            name: "칼바도스 1978",
            enName: "Calvados 1978",
            rate: 0,
            image:
              "https://wine21.speedgabia.com/WINE_MST/TITLE/0138000/0138436.jpg",
            country: "프랑스",
            type: 4,
            minAlcohol: 42,
            maxAlcohol: 42,
            sweetness: 2,
            acidity: 1,
            price: 377000,
            body: 5,
            tannins: 1,
            searchable: true,
            maker: "꽁트 루이 드 로리스통  Conte Louis de Roristin",
            style: null,
            rating: null,
            ferment: null,
            minTemperature: 20,
            maxTemperature: 20,
            foods: ["당분이 많은 과일 등과 잘 어울린다."],
            importer: null,
            rates: [[Object]],
            id: 138436,
          },
          {
            _id: "169806",
            order: 169806,
            name: "복, 피노 누아 셀렉션",
            enName: "Bock, Pinot Noir Selection",
            rate: 0,
            image:
              "https://wine21.speedgabia.com/WINE_MST/TITLE/0169000/0169806.png",
            country: "헝가리",
            type: 0,
            minAlcohol: 14,
            maxAlcohol: 15,
            sweetness: 1,
            acidity: 4,
            price: 101500,
            body: 3,
            tannins: 3,
            searchable: true,
            maker: "복  Bock",
            style: null,
            rating: null,
            ferment: "신규나 이미 사용한 오크 배럴에 넣어 6개월간 숙성",
            minTemperature: 14,
            maxTemperature: 16,
            foods: [
              "돼지고기",
              " 로스트비프",
              " 치킨",
              " 닭고기",
              " 버섯",
              " 가지튀김 과 잘 어울린다.",
            ],
            importer: "주식회사소믈리에&nbsp;&nbsp;&nbsp;",
            rates: [[Object], [Object]],
            id: 169806,
          },
          {
            _id: "140949",
            order: 140949,
            name: "로버트 몬다비, 프라이빗 셀렉션 피노 누아",
            enName: "Robert Mondavi, Private Selection Pinot Noir",
            rate: 0,
            image:
              "https://wine21.speedgabia.com/WINE_MST/TITLE/0140000/0140949.jpg",
            country: "미국",
            type: 0,
            minAlcohol: 13,
            maxAlcohol: 14,
            sweetness: 1,
            acidity: 3,
            price: 45000,
            body: 3,
            tannins: 2,
            searchable: true,
            maker: "로버트 몬다비  Robert Mondavi",
            style: "Californian Pinot Noir",
            rating: "Central Coast AVA",
            ferment: null,
            minTemperature: 16,
            maxTemperature: 18,
            foods: ["구운 고기", " 치즈", " 해산물"],
            importer: "신동와인&nbsp;&nbsp;&nbsp;",
            rates: [[Object]],
            id: 140949,
          },
          {
            _id: "160408",
            order: 160408,
            name: "바디아 디 모로나 칼리지아노 키안티",
            enName: "Badia di Morrona Caligiano Chianti ",
            rate: 0,
            image:
              "https://wine21.speedgabia.com/WINE_MST/TITLE/0160000/0160408.jpg",
            country: "이탈리아",
            type: 0,
            minAlcohol: null,
            maxAlcohol: null,
            sweetness: 1,
            acidity: 4,
            price: 0,
            body: 2,
            tannins: 2,
            searchable: true,
            maker: "바디아 디 모로나  Badia di Morrona",
            style: null,
            rating: null,
            ferment: null,
            minTemperature: 16,
            maxTemperature: 18,
            foods: ["짭짤한 살라미", " 치즈 및 붉은 고기 등과 잘 어울린다."],
            importer: null,
            rates: [[Object]],
            id: 160408,
          },
          {
            _id: "148144",
            order: 148144,
            name: "산 펠리체, 비고렐로",
            enName: "San Felice, Vigorello",
            rate: 0,
            image:
              "https://wine21.speedgabia.com/WINE_MST/TITLE/0148000/0148144.jpg",
            country: "이탈리아",
            type: 0,
            minAlcohol: 13,
            maxAlcohol: 14,
            sweetness: 1,
            acidity: 4,
            price: 0,
            body: 4,
            tannins: 4,
            searchable: true,
            maker: "산 펠리체  San Felice",
            style: "Central Italy Red",
            rating: "Toscana IGT(IGP)",
            ferment: null,
            minTemperature: 16,
            maxTemperature: 18,
            foods: [
              "고급 안심",
              " 등심 스테이크",
              " 그릴에 구운 야채",
              " 바비큐요리",
              " 숙성된 치즈등과 잘 어울린다.",
            ],
            importer: "롯데칠성음료&nbsp;&nbsp;&nbsp;",
            rates: [[Object]],
            id: 148144,
          },
        ])
      );
    }
  ),
];

export default productsDetailHandler;
