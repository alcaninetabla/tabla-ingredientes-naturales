<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tabla Periódica de Ingredientes</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Inter', sans-serif;
            background-color: #f0f4f8;
        }
        .element-card {
            transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
            border-width: 2px;
            background-clip: padding-box;
            cursor: pointer;
        }
        .element-card:hover {
            transform: translateY(-6px) scale(1.08);
            box-shadow: 0 12px 24px rgba(0,0,0,0.15);
            z-index: 10;
        }
        .legend-item {
            display: flex;
            align-items: center;
        }
        .legend-color {
            width: 20px;
            height: 20px;
            border-radius: 4px;
            margin-right: 10px;
            flex-shrink: 0;
        }
        .periodic-table-grid {
            display: grid;
            grid-template-columns: repeat(10, minmax(0, 1fr));
            gap: 0.5rem;
        }
        .series-grid {
            display: grid;
            grid-template-columns: repeat(8, minmax(0, 1fr));
            gap: 0.5rem;
            margin-top: 1.5rem;
        }
    </style>
</head>
<body class="p-4 md:p-8">

    <header class="text-center mb-8">
        <h1 class="text-3xl md:text-5xl font-bold text-gray-800">Tabla Periódica de Ingredientes</h1>
        <p class="text-gray-600 mt-2 text-lg">Una colección visual de ingredientes y componentes para el bienestar.</p>
    </header>

    <main id="periodic-table-container" class="periodic-table-grid max-w-screen-xl mx-auto">
        <!-- Los elementos se insertarán aquí dinámicamente -->
    </main>
    
    <section id="series-container" class="max-w-screen-lg mx-auto">
         <!-- Las series inferiores se insertarán aquí -->
    </section>

    <footer class="mt-12 max-w-screen-xl mx-auto">
        <h2 class="text-xl font-bold text-gray-700 mb-4">Leyenda</h2>
        <div id="legend-container" class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-6 gap-y-4">
            <!-- La leyenda se insertará aquí -->
        </div>
    </footer>

    <script>
        const elements = [
            // Fila 1
            { id: 1, name: 'Ternera', symbol: 'Bf', category: 'Carnes', pos: [1, 1], imageUrl: 'https://storage.googleapis.com/generative-ai-storytelling-test-data/2024-07-22/1690042953100/image.png' },
            { id: 39, name: 'Leche de Cabra', symbol: 'Gm', category: 'Lácteos', pos: [1, 2], imageUrl: 'https://storage.googleapis.com/generative-ai-storytelling-test-data/2024-07-23/1690049155000/image.png' },
            { id: 31, name: 'Grillo', symbol: 'Ck', category: 'Insectos', pos: [1, 8], imageUrl: 'https://storage.googleapis.com/generative-ai-storytelling-test-data/2024-07-23/1690048187000/image.png' },
            { id: 46, name: 'Aceite de Coco', symbol: 'Co', category: 'Aceites', pos: [1, 9], imageUrl: 'https://storage.googleapis.com/generative-ai-storytelling-test-data/2024-07-23/1690050964000/image.png' },
            { id: 27, name: 'Miel', symbol: 'Hn', category: 'Productos Naturales', pos: [1, 10], imageUrl: 'https://storage.googleapis.com/generative-ai-storytelling-test-data/2024-07-23/1690047504000/image.png' },
            
            // Fila 2
            { id: 2, name: 'Pavo', symbol: 'Tr', category: 'Carnes', pos: [2, 1], imageUrl: 'https://storage.googleapis.com/generative-ai-storytelling-test-data/2024-07-22/1690043011045/image.png' },
            { id: 3, name: 'Cerdo', symbol: 'Pk', category: 'Carnes', pos: [3, 1], imageUrl: 'https://storage.googleapis.com/generative-ai-storytelling-test-data/2024-07-22/1690043134589/image.png' },
            { id: 4, name: 'Salmón', symbol: 'Sa', category: 'Pescados y Mariscos', pos: [2, 2], imageUrl: 'https://storage.googleapis.com/generative-ai-storytelling-test-data/2024-07-22/1690043239460/image.png' },
            { id: 5, name: 'Atún', symbol: 'Tu', category: 'Pescados y Mariscos', pos: [3, 2], imageUrl: 'https://storage.googleapis.com/generative-ai-storytelling-test-data/2024-07-22/1690043323112/image.png' },
            { id: 6, name: 'Camarón', symbol: 'Sh', category: 'Pescados y Mariscos', pos: [4, 2], imageUrl: 'https://storage.googleapis.com/generative-ai-storytelling-test-data/2024-07-22/1690043443180/image.png' },
            
            // Frutas, Semillas y Vegetales
            { id: 33, name: 'Zanahoria', symbol: 'Cr', category: 'Vegetales', pos: [2, 5], imageUrl: 'https://storage.googleapis.com/generative-ai-storytelling-test-data/2024-07-23/1690048342000/image.png' },
            { id: 38, name: 'Betabel', symbol: 'Bt', category: 'Vegetales', pos: [2, 6], imageUrl: 'https://storage.googleapis.com/generative-ai-storytelling-test-data/2024-07-23/1690049052000/image.png' },
            { id: 34, name: 'Guisantes', symbol: 'Pe', category: 'Vegetales', pos: [2, 7], imageUrl: 'https://storage.googleapis.com/generative-ai-storytelling-test-data/2024-07-23/1690048621000/image.png' },
            { id: 29, name: 'Arándanos', symbol: 'Bb', category: 'Frutas y Semillas', pos: [3, 5], imageUrl: 'https://storage.googleapis.com/generative-ai-storytelling-test-data/2024-07-23/1690048034000/image.png' },
            { id: 25, name: 'Papaya', symbol: 'Py', category: 'Frutas y Semillas', pos: [3, 6], imageUrl: 'https://storage.googleapis.com/generative-ai-storytelling-test-data/2024-07-23/1690047321000/image.png' },
            { id: 26, name: 'Calabaza', symbol: 'Pu', category: 'Frutas y Semillas', pos: [3, 7], imageUrl: 'https://storage.googleapis.com/generative-ai-storytelling-test-data/2024-07-23/1690047432000/image.png' },
            { id: 32, name: 'Amaranto', symbol: 'Am', category: 'Frutas y Semillas', pos: [4, 5], imageUrl: 'https://storage.googleapis.com/generative-ai-storytelling-test-data/2024-07-23/1690048259000/image.png' },
            { id: 35, name: 'Chía', symbol: 'Ci', category: 'Frutas y Semillas', pos: [4, 6], imageUrl: 'https://storage.googleapis.com/generative-ai-storytelling-test-data/2024-07-23/1690048753000/image.png' },
            { id: 36, name: 'Linaza', symbol: 'Fx', category: 'Frutas y Semillas', pos: [4, 7], imageUrl: 'https://storage.googleapis.com/generative-ai-storytelling-test-data/2024-07-23/1690048843000/image.png' },

            // Plantas y Hierbas
            { id: 7, name: 'Espirulina', symbol: 'Sp', category: 'Plantas y Hierbas', pos: [5, 1], imageUrl: 'https://storage.googleapis.com/generative-ai-storytelling-test-data/2024-07-22/1690043564123/image.png' },
            { id: 8, name: 'Moringa', symbol: 'Mo', category: 'Plantas y Hierbas', pos: [5, 2], imageUrl: 'https://storage.googleapis.com/generative-ai-storytelling-test-data/2024-07-22/1690043711502/image.png' },
            { id: 9, name: 'Aloe Vera', symbol: 'Av', category: 'Plantas y Hierbas', pos: [5, 3], imageUrl: 'https://storage.googleapis.com/generative-ai-storytelling-test-data/2024-07-22/1690043813421/image.png' },
            { id: 10, name: 'Romero', symbol: 'Rm', category: 'Plantas y Hierbas', pos: [5, 4], imageUrl: 'https://storage.googleapis.com/generative-ai-storytelling-test-data/2024-07-22/1690043916331/image.png' },
            { id: 11, name: 'Caléndula', symbol: 'Cd', category: 'Plantas y Hierbas', pos: [5, 5], imageUrl: 'https://storage.googleapis.com/generative-ai-storytelling-test-data/2024-07-22/1690044031445/image.png' },
            { id: 12, name: 'Jojoba', symbol: 'Jj', category: 'Plantas y Hierbas', pos: [5, 6], imageUrl: 'https://storage.googleapis.com/generative-ai-storytelling-test-data/2024-07-22/1690044131908/image.png' },
            { id: 13, name: 'Chilcuague', symbol: 'Ch', category: 'Plantas y Hierbas', pos: [5, 7], imageUrl: 'https://storage.googleapis.com/generative-ai-storytelling-test-data/2024-07-22/1690044241011/image.png' },
            { id: 14, name: 'Tila', symbol: 'Li', category: 'Plantas y Hierbas', pos: [5, 8], imageUrl: 'https://storage.googleapis.com/generative-ai-storytelling-test-data/2024-07-22/1690044342933/image.png' },
            { id: 15, name: 'Pasiflora', symbol: 'Pf', category: 'Plantas y Hierbas', pos: [5, 9], imageUrl: 'https://storage.googleapis.com/generative-ai-storytelling-test-data/2024-07-22/1690044458933/image.png' },
            { id: 16, name: 'Valeriana', symbol: 'Vl', category: 'Plantas y Hierbas', pos: [5, 10], imageUrl: 'https://storage.googleapis.com/generative-ai-storytelling-test-data/2024-07-22/1690044576353/image.png' },
            { id: 21, name: 'Polen', symbol: 'Pl', category: 'Plantas y Hierbas', pos: [6, 1], imageUrl: 'https://storage.googleapis.com/generative-ai-storytelling-test-data/2024-07-23/1690046969135/image.png' },
            { id: 22, name: 'Agave', symbol: 'Ag', category: 'Plantas y Hierbas', pos: [6, 2], imageUrl: 'https://storage.googleapis.com/generative-ai-storytelling-test-data/2024-07-23/1690047054000/image.png' },
            { id: 28, name: 'Manzanilla', symbol: 'Cm', category: 'Plantas y Hierbas', pos: [6, 3], imageUrl: 'https://storage.googleapis.com/generative-ai-storytelling-test-data/2024-07-23/1690047644000/image.png' },
            { id: 43, name: 'Yuca', symbol: 'Yc', category: 'Plantas y Hierbas', pos: [6, 4], imageUrl: 'https://storage.googleapis.com/generative-ai-storytelling-test-data/2024-07-23/1690049750000/image.png' },
            { id: 37, name: 'Cúrcuma', symbol: 'Tc', category: 'Plantas y Hierbas', pos: [6, 5], imageUrl: 'https://storage.googleapis.com/generative-ai-storytelling-test-data/2024-07-23/1690048951000/image.png' },
            { id: 45, name: 'Orégano', symbol: 'Or', category: 'Plantas y Hierbas', pos: [6, 6], imageUrl: 'https://storage.googleapis.com/generative-ai-storytelling-test-data/2024-07-23/1690050849000/image.png' },

            // Series Inferiores
            { id: 17, name: 'Colágeno', symbol: 'Cg', category: 'Moléculas', series: 'molecules', imageUrl: 'https://storage.googleapis.com/generative-ai-storytelling-test-data/2024-07-23/1690044683011/image.png' },
            { id: 18, name: 'Glucosamina', symbol: 'Gs', category: 'Moléculas', series: 'molecules', imageUrl: 'https://storage.googleapis.com/generative-ai-storytelling-test-data/2024-07-23/1690044827118/image.png' },
            { id: 19, name: 'Condroitina', symbol: 'Cn', category: 'Moléculas', series: 'molecules', imageUrl: 'https://storage.googleapis.com/generative-ai-storytelling-test-data/2024-07-23/1690044943084/image.png' },
            { id: 30, name: 'Taurina', symbol: 'Ta', category: 'Moléculas', series: 'molecules', imageUrl: 'https://storage.googleapis.com/generative-ai-storytelling-test-data/2024-07-23/1690048101000/image.png' },
            { id: 40, name: 'Omega', symbol: 'Om', category: 'Moléculas', series: 'molecules', imageUrl: 'https://storage.googleapis.com/generative-ai-storytelling-test-data/2024-07-23/1690049248000/image.png' },
            { id: 41, name: 'Fibra', symbol: 'Fb', category: 'Moléculas', series: 'molecules', imageUrl: 'https://storage.googleapis.com/generative-ai-storytelling-test-data/2024-07-23/1690049534000/image.png' },
            { id: 44, name: 'MSM', symbol: 'Ms', category: 'Moléculas', series: 'molecules', imageUrl: 'https://storage.googleapis.com/generative-ai-storytelling-test-data/2024-07-23/1690050759000/image.png' },
            { id: 20, name: 'Levadura', symbol: 'Yt', category: 'Microorganismos', series: 'microbes', imageUrl: 'https://storage.googleapis.com/generative-ai-storytelling-test-data/2024-07-23/1690045783125/image.png' },
            { id: 23, name: 'Diatomea', symbol: 'Di', category: 'Microorganismos', series: 'microbes', imageUrl: 'https://storage.googleapis.com/generative-ai-storytelling-test-data/2024-07-23/1690047163000/image.png' },
            { id: 42, name: 'Probióticos', symbol: 'Pb', category: 'Microorganismos', series: 'microbes', imageUrl: 'https://storage.googleapis.com/generative-ai-storytelling-test-data/2024-07-23/1690049634000/image.png' },
        ];

        const categoryColors = {
            'Carnes': 'bg-red-200 border-red-400 text-red-800',
            'Pescados y Mariscos': 'bg-sky-200 border-sky-400 text-sky-800',
            'Lácteos': 'bg-blue-200 border-blue-400 text-blue-800',
            'Insectos': 'bg-lime-200 border-lime-400 text-lime-800',
            'Productos Naturales': 'bg-amber-200 border-amber-400 text-amber-800',
            'Aceites': 'bg-yellow-300 border-yellow-500 text-yellow-900',
            'Vegetales': 'bg-orange-200 border-orange-400 text-orange-800',
            'Frutas y Semillas': 'bg-rose-200 border-rose-400 text-rose-800',
            'Plantas y Hierbas': 'bg-emerald-200 border-emerald-400 text-emerald-800',
            'Moléculas': 'bg-violet-200 border-violet-400 text-violet-800',
            'Microorganismos': 'bg-cyan-200 border-cyan-400 text-cyan-800',
        };

        const tableContainer = document.getElementById('periodic-table-container');
        const seriesContainer = document.getElementById('series-container');
        const legendContainer = document.getElementById('legend-container');

        function createElementCard(element) {
            const colorClasses = categoryColors[element.category] || 'bg-gray-200 border-gray-400 text-gray-800';
            const card = document.createElement('div');
            card.className = `element-card p-2 rounded-lg shadow-md flex flex-col items-center justify-center aspect-square ${colorClasses} relative`;
            card.innerHTML = `
                <div class="w-full flex justify-between items-start text-xs font-semibold">
                    <span>${element.id}</span>
                    <span class="font-bold">${element.symbol}</span>
                </div>
                <div class="flex-grow flex items-center justify-center w-full h-full py-1">
                    <img src="${element.imageUrl}" alt="[Imagen de ${element.name}]" class="max-w-full max-h-full object-contain" loading="lazy">
                </div>
                <span class="text-center text-xs font-semibold truncate w-full">${element.name}</span>
            `;
            return card;
        }

        elements.filter(el => el.pos).forEach(element => {
            const card = createElementCard(element);
            card.style.gridColumnStart = element.pos[1];
            card.style.gridRowStart = element.pos[0];
            tableContainer.appendChild(card);
        });

        const series = { molecules: [], microbes: [] };
        elements.filter(el => el.series).forEach(el => series[el.series].push(el));
        
        Object.keys(series).forEach(key => {
            if (series[key].length > 0) {
                const seriesGrid = document.createElement('div');
                seriesGrid.className = 'series-grid';
                series[key].forEach(element => {
                    const card = createElementCard(element);
                    seriesGrid.appendChild(card);
                });
                seriesContainer.appendChild(seriesGrid);
            }
        });

        Object.keys(categoryColors).forEach(category => {
            const colorClassBg = categoryColors[category].split(' ')[0];
            const colorClassBorder = categoryColors[category].split(' ')[1];
            const legendItem = document.createElement('div');
            legendItem.className = 'legend-item';
            legendItem.innerHTML = `
                <div class="legend-color ${colorClassBg} border-2 ${colorClassBorder}"></div>
                <span class="text-sm text-gray-700">${category}</span>
            `;
            legendContainer.appendChild(legendItem);
        });
    </script>
</body>
</html>
