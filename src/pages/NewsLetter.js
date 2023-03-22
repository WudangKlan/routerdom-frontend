import NewsletterSignup from '../components/NewsLetterSignup';
import PageContent from '../components/PageContent';

function NewsletterPage() {
  return (
    <PageContent title="Join our awesome newsletter!">
      <NewsletterSignup />
    </PageContent>
  );
}

export default NewsletterPage;

export async function action({ request }) {
  const datax = await request.formData();
  const email = datax.get('email');

  // send to backend newsletter server ...
  console.log(email);
  return { message: 'Signup successful!' };
}