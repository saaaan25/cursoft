// adecuar al formato todos los cursos (5 en total) ADRIAN
export const courses = [
    {
        id: 10000001,
        title: "Python desde cero",
        description: "Este curso contiene 5 módulos. Inicie su aprendizaje de Python con este curso autodidáctico para principiantes impartido por un experto. Python es uno de los lenguajes más populares en el mundo de la programación y la ciencia de datos, y la demanda de personas con capacidad para aplicar Python nunca ha sido tan alta.",
        learn: "Aprenda Python - el lenguaje de programación más popular y para la Ciencia de Datos y el Desarrollo de Software.",
        bg_color: "#a8aeef",
        font_color: "#5860bb",
        image_url: "../images/python.jpg",
        bg_url: "../logo/python-logo.png",
        url: "python-desde-cero",
        duration: "25 horas",
        level: "principante"
    },
    {
        id: 10000002,
        title: "JavaScript desde cero",
        description: "Descubra las bases del lenguaje JavaScript, el motor detrás del desarrollo web interactivo y dinámico. Aprende desde conceptos básicos hasta temas esenciales como funciones y eventos.",
        learn: "Domina JavaScript - el lenguaje base para la creación de sitios web modernos e interactivos.",
        bg_color: "#f7e08c",
        font_color: "#d4b855",
        image_url: "../images/javascript.png",
        bg_url: "../logo/javascript-logo.png",
        url: "javascript-desde-cero",
        duration: "30 horas",
        level: "principante"
    },
    {
        id: 10000003,
        title: "CSS desde cero",
        description: "Este curso ofrece un recorrido completo por los fundamentos de CSS, el lenguaje que da vida y estilo a las páginas web.",
        learn: "Aprende CSS - el estándar para diseñar y estilizar sitios web de manera profesional.",
        bg_color: "#6ea8ff",
        font_color: "#29589f",
        image_url: "../images/css.jpg",
        bg_url: "../logo/css-logo.png",
        url: "css-desde-cero",
        duration: "20 horas",
        level: "principante"
    },
    {
        id: 10000004,
        title: "HTML desde cero",
        description: "Descubre cómo construir las bases estructurales de cualquier sitio web utilizando HTML.",
        learn: "Domina HTML - el lenguaje esencial para estructurar contenido en la web.",
        bg_color: "#f59fbd",
        font_color: "#d12f5e",
        image_url: "../images/html.jpg",
        bg_url: "../logo/html-logo.png",
        url: "html-desde-cero",
        duration: "15 horas",
        level: "principante"
    },
    {
        id: 10000005,
        title: "C++ desde cero",
        description: "Aprende desde los fundamentos hasta conceptos avanzados de C++, uno de los lenguajes más versátiles y rápidos en el mundo de la programación.",
        learn: "Domina C++ - el lenguaje poderoso y versátil para el desarrollo de software y videojuegos.",
        bg_color: "#90df6e",
        font_color: "#58b232",
        image_url: "../images/c++.png",
        bg_url: "../logo/cpp-logo.png",
        url: "cpp-desde-cero",
        duration: "40 horas",
        level: "principante"
    }
]




export const modules = [
    {
        curso: "Python desde cero", //ya está
        text: "Este curso contiene 5 módulos. Inicie su aprendizaje de Python con este curso autodidáctico para principiantes impartido por un experto. Python es uno de los lenguajes más populares en el mundo de la programación y la ciencia de datos, y la demanda de personas con capacidad para aplicar Python nunca ha sido tan alta.",
        //ya está
        learn: "Aprenda Python - el lenguaje de programación más popular y para la Ciencia de Datos y el Desarrollo de Software.",
        modulos: [ //ya está
            "Conceptos básicos de Python",
            "Variables y sus tipos en Python",
            "Operadores en Python",
            "Condicionales y Bucles",
            "Listas"
        ],
        descripcion: [ //ya está
            "Este módulo te introduce al fascinante mundo de la programación con Python, un lenguaje ampliamente usado por su simplicidad y versatilidad. Aprenderás sobre su historia, características y la configuración de tu entorno de desarrollo.",
            "Entender las variables y sus tipos es esencial para cualquier programador. En este módulo explorarás cómo manejar diferentes tipos de datos como números, cadenas de texto, y booleanos, así como las mejores prácticas para nombrar y usar variables.",
            "Los operadores son las herramientas que permiten manipular datos. Aquí, aprenderás a realizar operaciones aritméticas, lógicas y relacionales en Python, sentando las bases para desarrollar programas más complejos.",
            "Las estructuras de control como los condicionales y bucles son clave para tomar decisiones dentro de un programa. En este módulo aprenderás a crear flujos de control usando sentencias if, while y for, y cómo estos permiten la ejecución repetida o condicional de código.",
            "Las listas son una de las estructuras de datos más importantes en Python. Aprenderás a crear, modificar y manipular listas, además de comprender cómo se utilizan en el almacenamiento y la organización de datos."
        ]
    },
    {
        curso: "JavaScript desde cero",
        text: "Este curso contiene 5 módulos. Inicie su aprendizaje de Python con este curso autodidáctico para principiantes impartido por un experto. Python es uno de los lenguajes más populares en el mundo de la programación y la ciencia de datos, y la demanda de personas con capacidad para aplicar Python nunca ha sido tan alta.",
        modulos: [
            "Conceptos básicos de JavaScript",
            "Variables y sus tipos en JavaScript",
            "Operadores en JavaScript",
            "Condicionales y Bucles",
            "Listas"
        ],
        descripcion: [
            "JavaScript es el lenguaje que impulsa la interactividad en la web. En este módulo aprenderás sobre sus orígenes, características y cómo configurar tu entorno para empezar a escribir código que se ejecute directamente en el navegador.",
            "El manejo de variables es crucial para cualquier aplicación. Este módulo se enfoca en cómo declarar variables, qué tipos de datos maneja JavaScript y cómo usar el sistema de tipado dinámico que ofrece.",
            "Los operadores son fundamentales para realizar cálculos y operaciones dentro de cualquier aplicación. Aquí aprenderás a usar operadores matemáticos, lógicos y de comparación, lo que te permitirá realizar transformaciones sobre los datos.",
            "Los condicionales y bucles te permitirán hacer que tu código tome decisiones o repita acciones. Aprenderás cómo utilizar las sentencias if, for y while, esenciales para controlar el flujo de tu aplicación de forma dinámica.",
            "Las listas (o arreglos en JavaScript) son fundamentales para organizar grandes cantidades de información. Aprenderás a crear y manipular listas para almacenar datos de manera eficiente, accediendo a elementos de forma rápida y ordenada."
        ]
    },
    {
        curso: "CSS desde cero",
        text: "Este curso contiene 5 módulos. Inicie su aprendizaje de Python con este curso autodidáctico para principiantes impartido por un experto. Python es uno de los lenguajes más populares en el mundo de la programación y la ciencia de datos, y la demanda de personas con capacidad para aplicar Python nunca ha sido tan alta.",
        modulos: [
            "Conceptos básicos de CSS",
            "Estructura básica",
            "Propiedades en CSS 1",
            "Propiedades en CSS 2",
            "Propiedades en CSS 3"
        ],
        descripcion: [
            "CSS (Cascading Style Sheets) es el lenguaje usado para diseñar la apariencia de las páginas web. En este módulo aprenderás qué es CSS, su rol en el desarrollo web y cómo enlazarlo con HTML para comenzar a aplicar estilos básicos a tus proyectos.",
            "Aquí aprenderás a estructurar un documento CSS correctamente. Comprenderás conceptos como selectores, reglas, y cómo aplicar estilos de manera eficiente a elementos HTML individuales o conjuntos.",
            "En este módulo explorarás las propiedades más importantes de CSS, como el manejo de colores, fuentes, y espaciados. Estas propiedades básicas son fundamentales para darle un toque visual atractivo a tus páginas web.",
            "A medida que avanzas, aprenderás propiedades más avanzadas de CSS, incluyendo el manejo de posiciones, display, y flexbox, que te permitirán crear diseños mucho más complejos y adaptativos.",
            "Finalmente, entrarás en las propiedades más modernas del CSS, como CSS Grid y animaciones, que son herramientas poderosas para desarrollar interfaces modernas y adaptativas, con efectos visuales llamativos."
        ]
    },
    {
        curso: "HTML desde cero",
        text: "Este curso contiene 5 módulos. Inicie su aprendizaje de Python con este curso autodidáctico para principiantes impartido por un experto. Python es uno de los lenguajes más populares en el mundo de la programación y la ciencia de datos, y la demanda de personas con capacidad para aplicar Python nunca ha sido tan alta.",
        modulos: [
            "Conceptos básicos de HTML",
            "Etiquetas de HTML",
            "Crear página web con HTML"
        ],
        descripcion: [
            "HTML es el lenguaje base que estructura todo el contenido de las páginas web. En este módulo conocerás los orígenes del HTML y aprenderás sobre su sintaxis básica, como elementos, atributos, y la estructura general de un documento web.",
            "Este módulo te enseña las etiquetas más importantes de HTML, como las etiquetas de encabezado, párrafos, enlaces, imágenes y más. Saber cómo usar correctamente estas etiquetas es esencial para estructurar cualquier contenido en la web.",
            "Este módulo final te guiará paso a paso en la creación de una página web completa utilizando solo HTML. Aprenderás a combinar los conceptos aprendidos anteriormente para construir un sitio web funcional desde cero."
        ]
    },
    {
        curso: "C++ desde cero",
        text: "Este curso contiene 5 módulos. Inicie su aprendizaje de Python con este curso autodidáctico para principiantes impartido por un experto. Python es uno de los lenguajes más populares en el mundo de la programación y la ciencia de datos, y la demanda de personas con capacidad para aplicar Python nunca ha sido tan alta.",
        modulos: [
            "Conceptos básicos de C++",
            "Variables y sus tipos en C++",
            "Operadores en C++",
            "Condicionales y Bucles",
            "Listas"
        ],
        descripcion: [
            "C++ es un lenguaje poderoso utilizado en aplicaciones de alto rendimiento. En este módulo aprenderás sobre su historia, sintaxis básica y cómo configurar tu entorno de desarrollo para empezar a trabajar con este lenguaje de programación compilado.",
            "En este módulo aprenderás a trabajar con variables en C++, incluyendo cómo declarar y usar distintos tipos de datos, como enteros, flotantes y cadenas, además de comprender el sistema de tipado estático que caracteriza a C++.",
            "Aquí estudiarás los operadores que te permiten manipular datos dentro de C++. Verás operadores aritméticos, lógicos y relacionales, que te ayudarán a construir funciones y cálculos más avanzados.",
            "Las estructuras de control en C++ son muy importantes para la ejecución de código en diversas condiciones. Aprenderás a implementar condicionales y bucles para tomar decisiones y repetir bloques de código de forma eficiente.",
            "Las listas (o arrays) en C++ son estructuras de datos clave para organizar múltiples elementos del mismo tipo. Aprenderás a declarar, inicializar y manipular arrays, además de usar punteros para acceder a sus elementos."
        ]
    }
];
