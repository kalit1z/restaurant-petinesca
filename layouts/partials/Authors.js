import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";
import Link from "next/link";

const NewsletterCTA = () => (
  <div style={{textAlign: "center", backgroundColor: "#F3EAFF", padding: "20px", marginTop: "30px 0", borderRadius: "8px"}}>
    <p style={{fontSize: "24px", color: "#333333", marginBottom: "15px"}}>
      <strong>Révolutionnez Votre Cuisine : Maîtrisez l'Art du Pain au Levain en 24 Heures !</strong>
    </p>
    <p style={{fontSize: "16px", color: "#555555", marginBottom: "20px"}}>
      Découvrez les Secrets d'un Pain Savoureux, Sain et Fait Maison
    </p>
    <a href="https://www.fastercook.fr/cuisine" target="_blank" rel="noopener noreferrer" style={{display: "inline-block", backgroundColor: "#D072EA", color: "white", padding: "10px 20px", textDecoration: "none", borderRadius: "5px", fontWeight: "bold"}}>
      Je Veux Révéler le Boulanger en Moi !
    </a>
  </div>
);

const Authors = ({ authors }) => {
  return (
    <>
      <div className="row justify-center">
        {authors.map((author, i) => (
          <div className="col-12 mb-8 sm:col-6 md:col-4" key={`key-${i}`}>
            <div className="text-center">
              {author.frontmatter.image && (
                <div className="mb-4">
                  <Image
                    src={author.frontmatter.image}
                    alt={author.frontmatter.title}
                    height={200}
                    width={200}
                    className="rounded-lg inline-block"
                  />
                </div>
              )}
              <h2 className="h4 mb-2">
                <Link
                  href={`/authors/${author.slug}`}
                  className="block hover:text-primary"
                >
                  {author.frontmatter.title}
                </Link>
              </h2>
              {author.frontmatter.description && (
                <p className="text-center">{author.frontmatter.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
      <NewsletterCTA />
    </>
  );
};

export default Authors;