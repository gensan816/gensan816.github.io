import { fetchApi, fetchProto, fetchText } from '@libs/fetch';
import { Plugin } from '@/types/plugin';
import { Filters } from '@libs/filterInputs';
import { load as loadCheerio } from 'cheerio';
import { defaultCover } from '@libs/defaultCover';
import { NovelStatus } from '@libs/novelStatus';

class RncalationPlugin implements Plugin.PluginBase {
  id = 'rncalation';
  name = 'RNCALATION';
  icon = 'src/spanish/rncalation/icon.png';
  site = 'https://rncalation.online';
  version = '1.0.0';
  filters: Filters | undefined = undefined;
  
  // Es vital activarlo en true ya que la web usa carga dinámica y sistema de cuentas
  webStorageUtilized = true; 

  async popularNovels(
    pageNo: number,
    { showLatestNovels }: Plugin.PopularNovelsOptions<typeof this.filters>,
  ): Promise<Plugin.NovelItem[]> {
    // Si el usuario pide lo más reciente, apuntamos a la sección de actualizaciones
    const url = showLatestNovels 
      ? `${this.site}/?page=${pageNo}&sort=latest` 
      : `${this.site}/?page=${pageNo}&sort=popular`;

    const body = await fetchText(url);
    const $ = loadCheerio(body);
    const novels: Plugin.NovelItem[] = [];

    // Filtramos los elementos del catálogo buscando exclusivamente las que digan "Novel"
    $('div.card, div.novel-item, .flex.flex-col').each((index, element) => {
      const type = $(element).find('.text-sm, .badge, span').text().trim();
      
      // Omitimos Manhwas/Mangas; LNReader solo lee texto plano
      if (type.toLowerCase().includes('novel')) {
        const name = $(element).find('h1, h2, .title').text().trim();
        const href = $(element).find('a').attr('href') || '';
        const cover = $(element).find('img').attr('src') || defaultCover;

        if (name && href) {
          novels.push({
            name,
            path: href.replace(this.site, ''), // Guardamos solo la ruta relativa
            cover,
          });
        }
      }
    });

    return novels;
  }

  async parseNovel(novelPath: string): Promise<Plugin.SourceNovel> {
    const body = await fetchText(this.site + novelPath);
    const $ = loadCheerio(body);

    const novel: Plugin.SourceNovel = {
      path: novelPath,
      name: $('h1').first().text().trim() || 'Novela sin título',
      cover: $('img.portada, .main-cover img').attr('src') || defaultCover,
      summary: $('.summary, p.description, div.text-base').text().trim(),
    };

    const chapters: Plugin.ChapterItem[] = [];

    // Buscador de la lista de capítulos dentro de la ficha de la novela
    $('a[href*="/capitulo/"], .chapters-list a, .list-chapters a').each((index, element) => {
      const chapterName = $(element).text().trim();
      const chapterHref = $(element).attr('href') || '';

      if (chapterHref) {
        chapters.push({
          name: chapterName,
          path: chapterHref.replace(this.site, ''),
          releaseTime: '', 
          chapterNumber: index + 1,
        });
      }
    });

    // Invertimos la lista para que el capítulo 1 aparezca al inicio en la app
    novel.chapters = chapters.reverse();
    return novel;
  }

  async parseChapter(chapterPath: string): Promise<string> {
    const body = await fetchText(this.site + chapterPath);
    const $ = loadCheerio(body);

    // Extrae el contenido html limpio del contenedor del texto, eliminando scripts de anuncios
    const chapterText = $('.chapter-content, #contenido-novela, .text-content').html() || '';
    
    return chapterText;
  }

  async searchNovels(
    searchTerm: string,
    pageNo: number,
  ): Promise<Plugin.NovelItem[]> {
    const url = `${this.site}/?search=${encodeURIComponent(searchTerm)}&page=${pageNo}`;
    const body = await fetchText(url);
    const $ = loadCheerio(body);
    const novels: Plugin.NovelItem[] = [];

    $('div.card, .search-result').each((index, element) => {
      const type = $(element).find('.badge, span').text().trim();
      
      if (type.toLowerCase().includes('novel')) {
        const name = $(element).find('h1, h2, .title').text().trim();
        const href = $(element).find('a').attr('href') || '';
        const cover = $(element).find('img').attr('src') || defaultCover;

        if (name && href) {
          novels.push({ name, path: href.replace(this.site, ''), cover });
        }
      }
    });

    return novels;
  }

  resolveUrl = (path: string, isNovel?: boolean) => this.site + path;
}

export default new RncalationPlugin();
