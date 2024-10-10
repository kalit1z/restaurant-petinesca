import config from "@config/config";
import { markdownify } from "@lib/utils/textConverter";

const Contact = ({ data }) => {
  const { frontmatter } = data;
  const { title } = frontmatter;
  const { contact_form_action } = config.params;

  return (
    <section className="section">
      <div className="container max-w-[700px]">
        {markdownify(title, "h1", "h2 mb-8 text-center")}
        <form
          className="contact-form mb-10"
          method="POST"
          action={contact_form_action}
        >
          <div className="mb-6">
            <label className="mb-2 block" htmlFor="name">
              Nom
            </label>
            <input
              className="form-input w-full"
              name="name"
              type="text"
              required
            />
          </div>
          <div className="mb-6">
            <label className="mb-2 block" htmlFor="email">
              Email
            </label>
            <input
              className="form-input w-full"
              name="email"
              type="email"
              required
            />
          </div>
          <div className="mb-6">
            <label className="mb-2 block" htmlFor="subject">
              Sujet
            </label>
            <input
              className="form-input w-full"
              name="subject"
              type="text"
              required
            />
          </div>
          <div className="mb-6">
            <label className="mb-2 block" htmlFor="message">
              Message
            </label>
            <textarea className="form-textarea w-full" rows="7" />
          </div>
          <button className="btn btn-outline-primary">Envoyer</button>
        </form>

        <div>
  <h3 className="mb-4">Bienvenue sur notre Site de Recettes Petinesca</h3>
  <p className="mb-4">
    Nous sommes ravis de vous accueillir sur notre site dédié à la gastronomie et aux recettes inspirantes. Sur Site de Recettes Petinesca, nous partageons notre passion pour la cuisine en vous offrant une variété de recettes délicieuses et faciles à préparer.
  </p>
  <p className="mb-4">
    Si vous avez des questions sur nos recettes, nos ingrédients ou si vous souhaitez simplement partager vos créations avec nous, n'hésitez pas à nous contacter. Nous sommes toujours heureux d'échanger avec nos visiteurs !
  </p>
  <p className="mb-4">
    Que vous cherchiez des idées de plats pour une occasion spéciale, des conseils sur des techniques de cuisine, ou des astuces pour des repas rapides et sains, notre équipe est là pour vous aider.
  </p>
  <p>
    Ensemble, explorons le monde de la cuisine et créons des plats inoubliables. Merci de faire partie de la communauté Petinesca !
  </p>
</div>

<div className="mt-16">
  <h3 className="mb-8 text-center">Foire Aux Questions</h3>
  <div className="space-y-6">
    <div>
      <h4 className="mb-2 font-semibold">Comment puis-je trouver une recette spécifique sur le Site de Recettes Petinesca ?</h4>
      <p>Vous pouvez naviguer à travers nos catégories de recettes ou utiliser notre barre de recherche pour trouver exactement ce que vous cherchez. Nous avons des recettes pour tous les goûts et toutes les occasions !</p>
    </div>
    <div>
      <h4 className="mb-2 font-semibold">Quel est votre délai de réponse habituel pour les questions sur les recettes ?</h4>
      <p>Nous nous efforçons de répondre à toutes les questions dans un délai de 24 heures. Si vous avez besoin d'une réponse plus rapide, n'hésitez pas à nous contacter directement par e-mail.</p>
    </div>
    <div>
      <h4 className="mb-2 font-semibold">Proposez-vous des recettes adaptées à des régimes spéciaux (végétarien, sans gluten, etc.) ?</h4>
      <p>Oui, nous avons une sélection de recettes adaptées à différents régimes alimentaires. Explorez nos options et trouvez des recettes délicieuses qui répondent à vos besoins spécifiques.</p>
    </div>
    <div>
      <h4 className="mb-2 font-semibold">Comment puis-je être informé des nouvelles recettes et articles sur le Site de Recettes Petinesca ?</h4>
      <p>Abonnez-vous à notre newsletter pour recevoir régulièrement des mises à jour sur nos dernières recettes, nos conseils de cuisine, et nos articles sur les tendances gastronomiques.</p>
    </div>
    <div>
      <h4 className="mb-2 font-semibold">Puis-je suggérer une recette ou partager mes propres créations culinaires avec vous ?</h4>
      <p>Absolument ! Nous adorons découvrir de nouvelles recettes et partager les créations de notre communauté. Envoyez-nous vos idées et vos recettes à travers notre formulaire de contact.</p>
    </div>
  </div>
</div>

      </div>
    </section>
  );
};

export default Contact;