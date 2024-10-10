import SearchResults from "@layouts/partials/SearchResults";
import { getSinglePage } from "@lib/contentParser";
import { Suspense } from "react";
import SeoMeta from "@layouts/partials/SeoMeta";

const SearchPage = async () => {
  const authors = await getSinglePage("content/authors");

  // Définition statique des métadonnées SEO
  const pageTitle = "Recherche | Restaurant Petinesca";
  const metaTitle = "Recherchez du contenu sur Restaurant Petinesca";
  const metaDescription = "Utilisez notre fonction de recherche pour explorer notre menu, nos événements spéciaux et nos actualités sur Restaurant Petinesca. Découvrez notre cuisine raffinée et notre ambiance unique.";

  return (
    <>
      <SeoMeta 
        title={pageTitle}
        meta_title={metaTitle}
        description={metaDescription}
        noindex={true}
      />
      <div className="section">
        <div className="container">
          <Suspense
            fallback={
              <h1 className="h2 mb-8 text-center">
                Recherche <span className="text-primary">...</span>
              </h1>
            }
          >
            <SearchResults authors={authors} />
          </Suspense>
        </div>
      </div>
    </>
  );
};

export default SearchPage;