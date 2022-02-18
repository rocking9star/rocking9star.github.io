const api_key="AIzaSyDS3MNjRf2mGcj6aclMRLYtG-oZEtg6QMM";
const form=document.getElementById("book-form");

form.addEventListener('submit', (event) => {
    // stop form submission
    event.preventDefault();
    searchBook();
    clearSearchBox();
});

function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

function insertResultToList(title,authors="",description,image){
    var li = document.createElement('li');
    var p=document.createElement("p");
    var div=document.createElement("div");
    var h3=document.createElement("h3");
    h3.appendChild(document.createTextNode(title));
    h3.style.textDecoration="underline";
    div.appendChild(h3);
    if(authors.length>0)
    {
        //adding authors to each card
        var h3_2=document.createElement("h3");
        h3_2.appendChild(document.createTextNode(authors));
        h3_2.style.textDecoration="underline";
        div.appendChild(h3_2);
    }
    var h4=document.createElement("h4");
    h4.appendChild(document.createTextNode(description));
    div.appendChild(h4);
    
    var myimage=document.createElement("img");
    myimage.src=image;
    p.appendChild(myimage);
    p.appendChild(div);
    p.style.display="grid";
    p.style.gridTemplateColumns="30% 70%";
    li.append(p);
    document.querySelector('ul').appendChild(li);
}

function searchBook(){
    //Deleting results of last search - if there was one
    document.getElementById("result-list").replaceChildren("","");
    var query=document.getElementById("text-query").value;
    const wordArray=query.split(",");
    const urlAddress="https://www.googleapis.com/books/v1/volumes?q="+wordArray[0]+"&key="+api_key;
    const result=httpGet(urlAddress);
    //first initialization of tempResult was only for QA purposes.
    let tempResult={
        "kind": "books#volumes",
        "totalItems": 612,
        "items": [
          {
            "kind": "books#volume",
            "id": "XtA-DwAAQBAJ",
            "etag": "jY+Y/EVQeHc",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/XtA-DwAAQBAJ",
            "volumeInfo": {
              "title": "Hello!",
              "authors": [
                "Dino Lingo"
              ],
              "publisher": "Dino Lingo",
              "readingModes": {
                "text": true,
                "image": true
              },
              "printType": "BOOK",
              "maturityRating": "NOT_MATURE",
              "allowAnonLogging": false,
              "contentVersion": "preview-1.0.0",
              "panelizationSummary": {
                "containsEpubBubbles": false,
                "containsImageBubbles": false
              },
              "imageLinks": {
                "smallThumbnail": "http://books.google.com/books/content?id=XtA-DwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                "thumbnail": "http://books.google.com/books/content?id=XtA-DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
              },
              "language": "iw",
              "previewLink": "http://books.google.com/books?id=XtA-DwAAQBAJ&pg=PP4&dq=hello&hl=&cd=1&source=gbs_api",
              "infoLink": "http://books.google.com/books?id=XtA-DwAAQBAJ&dq=hello&hl=&source=gbs_api",
              "canonicalVolumeLink": "https://books.google.com/books/about/Hello.html?hl=&id=XtA-DwAAQBAJ"
            },
            "saleInfo": {
              "country": "IL",
              "saleability": "NOT_FOR_SALE",
              "isEbook": false
            },
            "accessInfo": {
              "country": "IL",
              "viewability": "PARTIAL",
              "embeddable": true,
              "publicDomain": false,
              "textToSpeechPermission": "ALLOWED",
              "epub": {
                "isAvailable": true,
                "acsTokenLink": "http://books.google.com/books/download/Hello-sample-epub.acsm?id=XtA-DwAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
              },
              "pdf": {
                "isAvailable": true,
                "acsTokenLink": "http://books.google.com/books/download/Hello-sample-pdf.acsm?id=XtA-DwAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
              },
              "webReaderLink": "http://play.google.com/books/reader?id=XtA-DwAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
              "accessViewStatus": "SAMPLE",
              "quoteSharingAllowed": false
            },
            "searchInfo": {
              "textSnippet": "Dino Lingo !\u003cb\u003eשלום\u003c/b\u003e טורו &quot;\u003cb\u003eHello\u003c/b\u003e, Toro.&quot; !\u003cb\u003eשלום\u003c/b\u003e גובי &quot;\u003cb\u003eHello\u003c/b\u003e, Goby.&quot;"
            }
          },
          {
            "kind": "books#volume",
            "id": "yBE4AQAAMAAJ",
            "etag": "1hVlj4Zrcag",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/yBE4AQAAMAAJ",
            "volumeInfo": {
              "title": "In Equity, American Bell Telephone Company Et. Al., Complainants, V. American Cushman Telephone Company Et Al., Defendants",
              "authors": [
                "American Bell Telephone Company"
              ],
              "publishedDate": "1887",
              "industryIdentifiers": [
                {
                  "type": "OTHER",
                  "identifier": "CHI:102305449"
                }
              ],
              "readingModes": {
                "text": false,
                "image": true
              },
              "printType": "BOOK",
              "categories": [
                "Patent suits"
              ],
              "maturityRating": "NOT_MATURE",
              "allowAnonLogging": false,
              "contentVersion": "0.1.4.0.full.1",
              "panelizationSummary": {
                "containsEpubBubbles": false,
                "containsImageBubbles": false
              },
              "imageLinks": {
                "smallThumbnail": "http://books.google.com/books/content?id=yBE4AQAAMAAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                "thumbnail": "http://books.google.com/books/content?id=yBE4AQAAMAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
              },
              "language": "en",
              "previewLink": "http://books.google.com/books?id=yBE4AQAAMAAJ&pg=PA1812&dq=hello&hl=&cd=2&source=gbs_api",
              "infoLink": "https://play.google.com/store/books/details?id=yBE4AQAAMAAJ&source=gbs_api",
              "canonicalVolumeLink": "https://play.google.com/store/books/details?id=yBE4AQAAMAAJ"
            },
            "saleInfo": {
              "country": "IL",
              "saleability": "FREE",
              "isEbook": true,
              "buyLink": "https://play.google.com/store/books/details?id=yBE4AQAAMAAJ&rdid=book-yBE4AQAAMAAJ&rdot=1&source=gbs_api"
            },
            "accessInfo": {
              "country": "IL",
              "viewability": "ALL_PAGES",
              "embeddable": true,
              "publicDomain": true,
              "textToSpeechPermission": "ALLOWED",
              "epub": {
                "isAvailable": false,
                "downloadLink": "http://books.google.com/books/download/In_Equity_American_Bell_Telephone_Compan.epub?id=yBE4AQAAMAAJ&hl=&output=epub&source=gbs_api"
              },
              "pdf": {
                "isAvailable": true,
                "downloadLink": "http://books.google.com/books/download/In_Equity_American_Bell_Telephone_Compan.pdf?id=yBE4AQAAMAAJ&hl=&output=pdf&sig=ACfU3U3qTIHjgMAZU436Yp7qFXrTn8ersg&source=gbs_api"
              },
              "webReaderLink": "http://play.google.com/books/reader?id=yBE4AQAAMAAJ&hl=&printsec=frontcover&source=gbs_api",
              "accessViewStatus": "FULL_PUBLIC_DOMAIN",
              "quoteSharingAllowed": false
            },
            "searchInfo": {
              "textSnippet": "\u003cb\u003eHello\u003c/b\u003e , \u003cb\u003ehello\u003c/b\u003e , I did not understand your last sentence ; please repeat . ( 6.02 . ) Well , I am waiting ; \u003cb\u003ehello\u003c/b\u003e , \u003cb\u003ehello\u003c/b\u003e , \u003cb\u003ehello\u003c/b\u003e . I am waiting ( 6.03 . ) \u003cb\u003eHello\u003c/b\u003e , \u003cb\u003ehello\u003c/b\u003e , \u003cb\u003ehello\u003c/b\u003e , \u003cb\u003ehello\u003c/b\u003e , \u003cb\u003ehello\u003c/b\u003e , \u003cb\u003ehello\u003c/b\u003e , ( McPherson testifies . )&nbsp;..."
            }
          },
          {
            "kind": "books#volume",
            "id": "VunJCgAAQBAJ",
            "etag": "zC/ueSYPevY",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/VunJCgAAQBAJ",
            "volumeInfo": {
              "title": "Hello, Startup",
              "subtitle": "A Programmer's Guide to Building Products, Technologies, and Teams",
              "authors": [
                "Yevgeniy Brikman"
              ],
              "publisher": "\"O'Reilly Media, Inc.\"",
              "publishedDate": "2015-10-21",
              "description": "This book is the \"Hello, World\" tutorial for building products, technologies, and teams in a startup environment. It's based on the experiences of the author, Yevgeniy (Jim) Brikman, as well as interviews with programmers from some of the most successful startups of the last decade, including Google, Facebook, LinkedIn, Twitter, GitHub, Stripe, Instagram, AdMob, Pinterest, and many others. Hello, Startup is a practical, how-to guide that consists of three parts: Products, Technologies, and Teams. Although at its core, this is a book for programmers, by programmers, only Part II (Technologies) is significantly technical, while the rest should be accessible to technical and non-technical audiences alike. If you’re at all interested in startups—whether you’re a programmer at the beginning of your career, a seasoned developer bored with large company politics, or a manager looking to motivate your engineers—this book is for you.",
              "industryIdentifiers": [
                {
                  "type": "ISBN_13",
                  "identifier": "9781491910054"
                },
                {
                  "type": "ISBN_10",
                  "identifier": "1491910054"
                }
              ],
              "readingModes": {
                "text": false,
                "image": true
              },
              "pageCount": 604,
              "printType": "BOOK",
              "categories": [
                "Business & Economics"
              ],
              "maturityRating": "NOT_MATURE",
              "allowAnonLogging": false,
              "contentVersion": "0.1.0.0.preview.1",
              "imageLinks": {
                "smallThumbnail": "http://books.google.com/books/content?id=VunJCgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                "thumbnail": "http://books.google.com/books/content?id=VunJCgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
              },
              "language": "en",
              "previewLink": "http://books.google.com/books?id=VunJCgAAQBAJ&printsec=frontcover&dq=hello&hl=&cd=3&source=gbs_api",
              "infoLink": "http://books.google.com/books?id=VunJCgAAQBAJ&dq=hello&hl=&source=gbs_api",
              "canonicalVolumeLink": "https://books.google.com/books/about/Hello_Startup.html?hl=&id=VunJCgAAQBAJ"
            },
            "saleInfo": {
              "country": "IL",
              "saleability": "NOT_FOR_SALE",
              "isEbook": false
            },
            "accessInfo": {
              "country": "IL",
              "viewability": "PARTIAL",
              "embeddable": true,
              "publicDomain": false,
              "textToSpeechPermission": "ALLOWED",
              "epub": {
                "isAvailable": false
              },
              "pdf": {
                "isAvailable": false
              },
              "webReaderLink": "http://play.google.com/books/reader?id=VunJCgAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
              "accessViewStatus": "SAMPLE",
              "quoteSharingAllowed": false
            },
            "searchInfo": {
              "textSnippet": "This book is the &quot;Hello, World&quot; tutorial for building products, technologies, and teams in a startup environment."
            }
          },
          {
            "kind": "books#volume",
            "id": "HK7BCQAAQBAJ",
            "etag": "S3BHZmjcCVI",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/HK7BCQAAQBAJ",
            "volumeInfo": {
              "title": "Hello Life!",
              "authors": [
                "Marcus Butler"
              ],
              "publisher": "Simon and Schuster",
              "publishedDate": "2015-11-10",
              "description": "Popular British YouTube star Marcus Butler “speaks with both honesty and sincerity” (Booklist) in this irreverent memoir and big-brotherly advice book on how to be an almost-adult. For a twenty-three-year-old, Marcus Butler knows a lot about life—and not just from his own experiences, but from the millions of followers on YouTube who chat with him on his irreverent channel, known for its mix of hilarious sketches, light-hearted banter, and deeply empathetic take on serious issues. In this funny, colorful handbook, the warm and totally down-to-earth star shares his trademark big-brotherly advice for navigating the trickier aspects of modern living. Inside you’ll find Marcus’s thoughts on: -Being healthy—including his nutritious eating tips, favorite gym-free exercises, and butt-kicking hacks for getting in shape -Dating—from finding the courage to be yourself, to banishing first-date nerves, to rebooting a broken heart -Surviving life crises—such as his parents’ difficult divorce, the pain of watching a close friend spiral into anorexia and self-harm, and his regrets over giving in to bullies and giving up on a sport he loved -Getting the life you want—lessons for staying organized, handling pressure, thinking positively, and breaking world records! Part autobiography, part self-help guide, Hello Life! is a candid and playful look inside Marcus Butler’s life—the failures, the successes, and the lessons he’s learned along the way.",
              "industryIdentifiers": [
                {
                  "type": "ISBN_13",
                  "identifier": "9781501129995"
                },
                {
                  "type": "ISBN_10",
                  "identifier": "1501129996"
                }
              ],
              "readingModes": {
                "text": true,
                "image": false
              },
              "pageCount": 256,
              "printType": "BOOK",
              "categories": [
                "Biography & Autobiography"
              ],
              "maturityRating": "NOT_MATURE",
              "allowAnonLogging": true,
              "contentVersion": "1.5.6.0.preview.2",
              "panelizationSummary": {
                "containsEpubBubbles": false,
                "containsImageBubbles": false
              },
              "imageLinks": {
                "smallThumbnail": "http://books.google.com/books/content?id=HK7BCQAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                "thumbnail": "http://books.google.com/books/content?id=HK7BCQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
              },
              "language": "en",
              "previewLink": "http://books.google.com/books?id=HK7BCQAAQBAJ&printsec=frontcover&dq=hello&hl=&cd=4&source=gbs_api",
              "infoLink": "http://books.google.com/books?id=HK7BCQAAQBAJ&dq=hello&hl=&source=gbs_api",
              "canonicalVolumeLink": "https://books.google.com/books/about/Hello_Life.html?hl=&id=HK7BCQAAQBAJ"
            },
            "saleInfo": {
              "country": "IL",
              "saleability": "NOT_FOR_SALE",
              "isEbook": false
            },
            "accessInfo": {
              "country": "IL",
              "viewability": "PARTIAL",
              "embeddable": true,
              "publicDomain": false,
              "textToSpeechPermission": "ALLOWED_FOR_ACCESSIBILITY",
              "epub": {
                "isAvailable": true,
                "acsTokenLink": "http://books.google.com/books/download/Hello_Life-sample-epub.acsm?id=HK7BCQAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
              },
              "pdf": {
                "isAvailable": false
              },
              "webReaderLink": "http://play.google.com/books/reader?id=HK7BCQAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
              "accessViewStatus": "SAMPLE",
              "quoteSharingAllowed": false
            },
            "searchInfo": {
              "textSnippet": "In this funny, colorful handbook, the warm and totally down-to-earth star shares his trademark big-brotherly advice for navigating the trickier aspects of modern living."
            }
          },
          {
            "kind": "books#volume",
            "id": "E7hEDwAAQBAJ",
            "etag": "iv5gI3X2Xx8",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/E7hEDwAAQBAJ",
            "volumeInfo": {
              "title": "U.S. Army Special Forces Language Visual Training Materials - HEBREW - Plus Web-Based Program and Chapter Audio Downloads",
              "publisher": "Jeffrey Frank Jones",
              "description": "Now included at the end of the book is a link for a web-based program, PDFs and MP3 sound files for each chapter. Over 500 pages .... Developed by I Corps Foreign Language Training Center Fort Lewis, WA For the Special Operations Forces Language Office United States Special Operations Command LANGUAGE TRAINING The ability to speak a foreign language is a core unconventional warfare skill and is being incorporated throughout all phases of the qualification course. The students will receive their language assignment after the selection phase where they will receive a language starter kit that allows them to begin language training while waiting to return to Fort Bragg for Phase II. The 3rd Bn, 1st SWTG (A) is responsible for all language training at the USAJFKSWCS. The Special Operations Language Training (SOLT) is primarily a performance-oriented language course. Students are trained in one of ten core languages with enduring regional application and must show proficiency in speaking, listening and reading. A student receives language training throughout the Pipeline. In Phase IV, students attend an 8 or 14 week language blitz depending upon the language they are slotted in. The general purpose of the course is to provide each student with the ability to communicate in a foreign language. For successful completion of the course, the student must achieve at least a 1/1/1 or higher on the Defense Language Proficiency Test in two of the three graded areas; speaking, listening and reading. Table of Contents Lesson 1 People and Geography Lesson 2 Living and Working Lesson 3 Numbers, Dates, and Time Lesson 4 Daily Activities Lesson 5 Meeting the Family Lesson 6 Around Town Lesson 7 Shopping Lesson 8 Eating Out Lesson 9 Customs, and Courtesies in the Home Lesson 10 Around the House Lesson 11 Weather and Climate Lesson 12 Personal Appearance Lesson 13 Transportation Lesson 14 Travel Lesson 15 At School Lesson 16 Recreation and Leisure Lesson 17 Health and the Human Body Lesson 18 Political and International Topics in the News Lesson 19 The Military Lesson 20 Holidays and Traditions",
              "readingModes": {
                "text": false,
                "image": true
              },
              "pageCount": 503,
              "printType": "BOOK",
              "maturityRating": "NOT_MATURE",
              "allowAnonLogging": false,
              "contentVersion": "0.1.0.0.preview.1",
              "panelizationSummary": {
                "containsEpubBubbles": false,
                "containsImageBubbles": false
              },
              "imageLinks": {
                "smallThumbnail": "http://books.google.com/books/content?id=E7hEDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                "thumbnail": "http://books.google.com/books/content?id=E7hEDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
              },
              "language": "iw",
              "previewLink": "http://books.google.com/books?id=E7hEDwAAQBAJ&pg=PA364&dq=hello&hl=&cd=5&source=gbs_api",
              "infoLink": "http://books.google.com/books?id=E7hEDwAAQBAJ&dq=hello&hl=&source=gbs_api",
              "canonicalVolumeLink": "https://books.google.com/books/about/U_S_Army_Special_Forces_Language_Visual.html?hl=&id=E7hEDwAAQBAJ"
            },
            "saleInfo": {
              "country": "IL",
              "saleability": "NOT_FOR_SALE",
              "isEbook": false
            },
            "accessInfo": {
              "country": "IL",
              "viewability": "PARTIAL",
              "embeddable": true,
              "publicDomain": false,
              "textToSpeechPermission": "ALLOWED",
              "epub": {
                "isAvailable": false
              },
              "pdf": {
                "isAvailable": true
              },
              "webReaderLink": "http://play.google.com/books/reader?id=E7hEDwAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
              "accessViewStatus": "SAMPLE",
              "quoteSharingAllowed": false
            },
            "searchInfo": {
              "textSnippet": "baarOOKh habaa ברוך הבא 3-2 | \u003cb\u003eHello\u003c/b\u003e. Shalom \u003cb\u003eשלום\u003c/b\u003e 3-3 | Good morning. bOker tOV בקר טוב 3-4 | Good night. laaylatoV לילה טוב 3-5 | Goodbye. Shalom \u003cb\u003eשלום\u003c/b\u003e 3-6 | HOW are VOu? maa ShlomKhaa ? / maa מה שלומך ? / מה yOu : nishmaa&quot;?"
            }
          },
          {
            "kind": "books#volume",
            "id": "ZJRQAAAAMAAJ",
            "etag": "cjgW0XoYyD8",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/ZJRQAAAAMAAJ",
            "volumeInfo": {
              "title": "Microsoft C/C++ 7 Developer's Guide",
              "authors": [
                "Nabajyoti Barkakati"
              ],
              "publisher": "Sams",
              "publishedDate": "1992",
              "description": "Step-by-step instructions for all C++ features. This is a must-have for all C programmers using C/C++ 7. Bound-in disk features example programs that help readers learn Microsoft C/C++ 7. Extensive tutorials explain how to create DOS and Windows applications using C++, OOP, and the Microsoft Foundation Class (MFC) libraries. Includes a complete reference guide to MFC and the C library.",
              "industryIdentifiers": [
                {
                  "type": "OTHER",
                  "identifier": "UOM:39015029526871"
                }
              ],
              "readingModes": {
                "text": false,
                "image": false
              },
              "pageCount": 1467,
              "printType": "BOOK",
              "categories": [
                "Computers"
              ],
              "maturityRating": "NOT_MATURE",
              "allowAnonLogging": false,
              "contentVersion": "0.4.2.0.preview.0",
              "panelizationSummary": {
                "containsEpubBubbles": false,
                "containsImageBubbles": false
              },
              "imageLinks": {
                "smallThumbnail": "http://books.google.com/books/content?id=ZJRQAAAAMAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
                "thumbnail": "http://books.google.com/books/content?id=ZJRQAAAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
              },
              "language": "en",
              "previewLink": "http://books.google.com/books?id=ZJRQAAAAMAAJ&q=hello&dq=hello&hl=&cd=6&source=gbs_api",
              "infoLink": "http://books.google.com/books?id=ZJRQAAAAMAAJ&dq=hello&hl=&source=gbs_api",
              "canonicalVolumeLink": "https://books.google.com/books/about/Microsoft_C_C++_7_Developer_s_Guide.html?hl=&id=ZJRQAAAAMAAJ"
            },
            "saleInfo": {
              "country": "IL",
              "saleability": "NOT_FOR_SALE",
              "isEbook": false
            },
            "accessInfo": {
              "country": "IL",
              "viewability": "NO_PAGES",
              "embeddable": false,
              "publicDomain": false,
              "textToSpeechPermission": "ALLOWED",
              "epub": {
                "isAvailable": false
              },
              "pdf": {
                "isAvailable": false
              },
              "webReaderLink": "http://play.google.com/books/reader?id=ZJRQAAAAMAAJ&hl=&printsec=frontcover&source=gbs_api",
              "accessViewStatus": "NONE",
              "quoteSharingAllowed": false
            },
            "searchInfo": {
              "textSnippet": "The \u003cb\u003ehello\u003c/b\u003e application , 466 16 . 2 . hellomdl . h . Definition of the HelloModel class , 467 16 . 3 . hellovw . h . Declaration of the HelloView class , 468 - 469 16 . 4 . hellovw . cpp . Implementation of the HelloView class&nbsp;..."
            }
          },
          {
            "kind": "books#volume",
            "id": "-JT6DwAAQBAJ",
            "etag": "QRkHqmEXzBo",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/-JT6DwAAQBAJ",
            "volumeInfo": {
              "title": "Hello Gorgeous",
              "subtitle": "Empowering Quotes from Bold Women to Inspire Greatness",
              "authors": [
                "Lola Sanchez Herrero",
                "The Oliver Gal Artist Co.",
                "Ana Sanchez-Gal"
              ],
              "publisher": "Rock Point Gift & Stationery",
              "publishedDate": "2020-09-22",
              "description": "Hello Gorgeous is a beautiful gift book filled with empowering quotes and motivational anecdotes by powerful women to inspire every moment of your courageous life.",
              "industryIdentifiers": [
                {
                  "type": "ISBN_13",
                  "identifier": "9781631067082"
                },
                {
                  "type": "ISBN_10",
                  "identifier": "1631067087"
                }
              ],
              "readingModes": {
                "text": false,
                "image": true
              },
              "pageCount": 160,
              "printType": "BOOK",
              "averageRating": 3,
              "ratingsCount": 1,
              "maturityRating": "NOT_MATURE",
              "allowAnonLogging": false,
              "contentVersion": "preview-1.0.0",
              "panelizationSummary": {
                "containsEpubBubbles": false,
                "containsImageBubbles": false
              },
              "imageLinks": {
                "smallThumbnail": "http://books.google.com/books/content?id=-JT6DwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                "thumbnail": "http://books.google.com/books/content?id=-JT6DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
              },
              "language": "en",
              "previewLink": "http://books.google.com/books?id=-JT6DwAAQBAJ&printsec=frontcover&dq=hello&hl=&cd=7&source=gbs_api",
              "infoLink": "http://books.google.com/books?id=-JT6DwAAQBAJ&dq=hello&hl=&source=gbs_api",
              "canonicalVolumeLink": "https://books.google.com/books/about/Hello_Gorgeous.html?hl=&id=-JT6DwAAQBAJ"
            },
            "saleInfo": {
              "country": "IL",
              "saleability": "NOT_FOR_SALE",
              "isEbook": false
            },
            "accessInfo": {
              "country": "IL",
              "viewability": "PARTIAL",
              "embeddable": true,
              "publicDomain": false,
              "textToSpeechPermission": "ALLOWED",
              "epub": {
                "isAvailable": false
              },
              "pdf": {
                "isAvailable": false
              },
              "webReaderLink": "http://play.google.com/books/reader?id=-JT6DwAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
              "accessViewStatus": "SAMPLE",
              "quoteSharingAllowed": false
            },
            "searchInfo": {
              "textSnippet": "Hello Gorgeous is a beautiful gift book filled with empowering quotes and motivational anecdotes by powerful women to inspire every moment of your courageous life."
            }
          },
          {
            "kind": "books#volume",
            "id": "6fexTw0PAo4C",
            "etag": "QXLbH38cftA",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/6fexTw0PAo4C",
            "volumeInfo": {
              "title": "שלום עברית\u200e",
              "authors": [
                "Nili Ziv"
              ],
              "publisher": "Behrman House, Inc",
              "publishedDate": "2003",
              "industryIdentifiers": [
                {
                  "type": "ISBN_10",
                  "identifier": "0874411602"
                },
                {
                  "type": "ISBN_13",
                  "identifier": "9780874411607"
                }
              ],
              "readingModes": {
                "text": false,
                "image": false
              },
              "pageCount": 128,
              "printType": "BOOK",
              "categories": [
                "Hebrew language"
              ],
              "maturityRating": "NOT_MATURE",
              "allowAnonLogging": false,
              "contentVersion": "0.1.3.0.preview.0",
              "panelizationSummary": {
                "containsEpubBubbles": false,
                "containsImageBubbles": false
              },
              "imageLinks": {
                "smallThumbnail": "http://books.google.com/books/content?id=6fexTw0PAo4C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                "thumbnail": "http://books.google.com/books/content?id=6fexTw0PAo4C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
              },
              "language": "iw",
              "previewLink": "http://books.google.com/books?id=6fexTw0PAo4C&pg=PA8&dq=hello&hl=&cd=8&source=gbs_api",
              "infoLink": "http://books.google.com/books?id=6fexTw0PAo4C&dq=hello&hl=&source=gbs_api",
              "canonicalVolumeLink": "https://books.google.com/books/about/%D7%A9%D7%9C%D7%95%D7%9D_%D7%A2%D7%91%D7%A8%D7%99%D7%AA.html?hl=&id=6fexTw0PAo4C"
            },
            "saleInfo": {
              "country": "IL",
              "saleability": "NOT_FOR_SALE",
              "isEbook": false
            },
            "accessInfo": {
              "country": "IL",
              "viewability": "PARTIAL",
              "embeddable": true,
              "publicDomain": false,
              "textToSpeechPermission": "ALLOWED",
              "epub": {
                "isAvailable": false
              },
              "pdf": {
                "isAvailable": false
              },
              "webReaderLink": "http://play.google.com/books/reader?id=6fexTw0PAo4C&hl=&printsec=frontcover&source=gbs_api",
              "accessViewStatus": "SAMPLE",
              "quoteSharingAllowed": false
            },
            "searchInfo": {
              "textSnippet": "\u003cb\u003eHello\u003c/b\u003e ! Say \u003cb\u003ehello\u003c/b\u003e to the family . Add the word 015 and match the sentence to the picture . שָׁלוֹם אִמָא : אַבָּא . יַלְדָה . יֶלֶד . עַכְבָּר . Who Is Home ? Write the number of each picture."
            }
          },
          {
            "kind": "books#volume",
            "id": "edhQAAAAMAAJ",
            "etag": "xBFtOdB8gXA",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/edhQAAAAMAAJ",
            "volumeInfo": {
              "title": "UNIX Desktop Guide to OPEN LOOK",
              "authors": [
                "Nabajyoti Barkakati"
              ],
              "publisher": "Prentice Hall",
              "publishedDate": "1992",
              "description": "Clearly focused text teaches users how to access the UNIX system, build applications, and boost the potential of workstations. The book spells out the terminology of UNIX and the vitals for practical application development.",
              "industryIdentifiers": [
                {
                  "type": "OTHER",
                  "identifier": "UOM:39015025303408"
                }
              ],
              "readingModes": {
                "text": false,
                "image": false
              },
              "pageCount": 490,
              "printType": "BOOK",
              "categories": [
                "Computers"
              ],
              "maturityRating": "NOT_MATURE",
              "allowAnonLogging": false,
              "contentVersion": "0.2.1.0.preview.0",
              "panelizationSummary": {
                "containsEpubBubbles": false,
                "containsImageBubbles": false
              },
              "imageLinks": {
                "smallThumbnail": "http://books.google.com/books/content?id=edhQAAAAMAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
                "thumbnail": "http://books.google.com/books/content?id=edhQAAAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
              },
              "language": "en",
              "previewLink": "http://books.google.com/books?id=edhQAAAAMAAJ&q=hello&dq=hello&hl=&cd=9&source=gbs_api",
              "infoLink": "http://books.google.com/books?id=edhQAAAAMAAJ&dq=hello&hl=&source=gbs_api",
              "canonicalVolumeLink": "https://books.google.com/books/about/UNIX_Desktop_Guide_to_OPEN_LOOK.html?hl=&id=edhQAAAAMAAJ"
            },
            "saleInfo": {
              "country": "IL",
              "saleability": "NOT_FOR_SALE",
              "isEbook": false
            },
            "accessInfo": {
              "country": "IL",
              "viewability": "NO_PAGES",
              "embeddable": false,
              "publicDomain": false,
              "textToSpeechPermission": "ALLOWED",
              "epub": {
                "isAvailable": false
              },
              "pdf": {
                "isAvailable": false
              },
              "webReaderLink": "http://play.google.com/books/reader?id=edhQAAAAMAAJ&hl=&printsec=frontcover&source=gbs_api",
              "accessViewStatus": "NONE",
              "quoteSharingAllowed": false
            },
            "searchInfo": {
              "textSnippet": "For instance , to specify an initial size and position for ol _ \u003cb\u003ehello\u003c/b\u003e &#39; s main window , its foreground color , and its background color , you can place the following lines in a file named 01 _ \u003cb\u003ehello\u003c/b\u003e in your login directory&nbsp;..."
            }
          },
          {
            "kind": "books#volume",
            "id": "EqivRwAACAAJ",
            "etag": "Gbke3iMHS3A",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/EqivRwAACAAJ",
            "volumeInfo": {
              "title": "Hello, Animals!",
              "authors": [
                "Smriti Prasadam"
              ],
              "publisher": "Tiger Tales",
              "publishedDate": "2010-09-07",
              "description": "A charming introduction to ten of baby's best-loved animals, featuring high contrast black-and-white illustrations. A glittering burst of colored foil brings a vivid splash of color to every page. With first words to join in with, this stunning book will captivate sparkly little babies everywhere! Babies and toddlers will love to meet the adorable animals in this engaging book! Little hands can turn the sturdy board pages to meet a host of cute characters, including a panda, a cow, a tiger, a zebra, a giraffe, a penguin, and more. Simple text introduces readers to a handful of first words, while the bold artwork features each animal in its natural environment. Rounded corners, high-contrast black-and-white illustrations, and a glittering burst of colored foil on every page make this an ideal choice for the youngest learners.",
              "industryIdentifiers": [
                {
                  "type": "ISBN_10",
                  "identifier": "1589258614"
                },
                {
                  "type": "ISBN_13",
                  "identifier": "9781589258617"
                }
              ],
              "readingModes": {
                "text": false,
                "image": false
              },
              "pageCount": 10,
              "printType": "BOOK",
              "categories": [
                "Juvenile Fiction"
              ],
              "maturityRating": "NOT_MATURE",
              "allowAnonLogging": false,
              "contentVersion": "preview-1.0.0",
              "panelizationSummary": {
                "containsEpubBubbles": false,
                "containsImageBubbles": false
              },
              "imageLinks": {
                "smallThumbnail": "http://books.google.com/books/content?id=EqivRwAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
                "thumbnail": "http://books.google.com/books/content?id=EqivRwAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
              },
              "language": "en",
              "previewLink": "http://books.google.com/books?id=EqivRwAACAAJ&dq=hello&hl=&cd=10&source=gbs_api",
              "infoLink": "http://books.google.com/books?id=EqivRwAACAAJ&dq=hello&hl=&source=gbs_api",
              "canonicalVolumeLink": "https://books.google.com/books/about/Hello_Animals.html?hl=&id=EqivRwAACAAJ"
            },
            "saleInfo": {
              "country": "IL",
              "saleability": "NOT_FOR_SALE",
              "isEbook": false
            },
            "accessInfo": {
              "country": "IL",
              "viewability": "NO_PAGES",
              "embeddable": false,
              "publicDomain": false,
              "textToSpeechPermission": "ALLOWED",
              "epub": {
                "isAvailable": false
              },
              "pdf": {
                "isAvailable": false
              },
              "webReaderLink": "http://play.google.com/books/reader?id=EqivRwAACAAJ&hl=&printsec=frontcover&source=gbs_api",
              "accessViewStatus": "NONE",
              "quoteSharingAllowed": false
            },
            "searchInfo": {
              "textSnippet": "With first words to join in with, this stunning book will captivate sparkly little babies everywhere! Babies and toddlers will love to meet the adorable animals in this engaging book!"
            }
          }
        ]
      };
    tempResult=result;
    let myJSON = (JSON.stringify(tempResult));
    let arrayOfObj=(JSON.parse(myJSON)); //string when searching with API
    arrayOfObj=JSON.parse(arrayOfObj); //from string to js object when searching with API
    arrayOfObj=arrayOfObj.items;
    var authors_str="";
    var itemCounter=0;
    if(arrayOfObj!=undefined && arrayOfObj!=null)
        arrayOfObj.forEach((user)=>{  
        if(itemCounter==10)
            return;
        itemCounter++;
        var authors=user.volumeInfo.authors;
        var thetitle=user.volumeInfo.title;
        var description_of_book=user.volumeInfo.description;
        var imageLink="";
        if(user.volumeInfo.imageLinks!=null && user.volumeInfo.imageLinks.smallThumbnail!=null)
            imageLink=user.volumeInfo.imageLinks.smallThumbnail;
        if(authors!=null && authors!=undefined)
        {     
            for(let i=0; i<authors.length; i++){
                    authors_str+=authors[i]+" ";
                }
            if(description_of_book!=undefined && description_of_book!=null)
                insertResultToList(thetitle,"By "+authors_str,description_of_book,imageLink);
            else
                insertResultToList(thetitle,"By "+authors_str,"",imageLink);
        }   
        });
    
    return false;
}

function clearSearchBox(){
    document.getElementById("text-query").value="";
    
}