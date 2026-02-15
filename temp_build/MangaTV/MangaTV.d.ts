import { Source, Manga, Chapter, ChapterDetails, HomeSection, SearchRequest, PagedResults, SourceInfo, RequestManager } from '@paperback/types';
export declare const MangaTVInfo: SourceInfo;
export declare class MangaTV extends Source {
    requestManager: RequestManager;
    getMangaShareUrl(mangaId: string): string;
    getMangaDetails(mangaId: string): Promise<Manga>;
    getChapters(mangaId: string): Promise<Chapter[]>;
    getChapterDetails(mangaId: string, chapterId: string): Promise<ChapterDetails>;
    getSearchResults(query: SearchRequest, metadata: any): Promise<PagedResults>;
    getHomePageSections(sectionCallback: (section: HomeSection) => void): Promise<void>;
    getViewMoreItems(homepageSectionId: string, metadata: any): Promise<PagedResults>;
}
