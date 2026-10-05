import GumEssay from '@/components/gum-essay';
// GitHub Pages serves the same static document for every query string.
// GumEssay restores ?path= in the browser and on history navigation.
export default function Home() {
  return <GumEssay initialPath="curious" />;
}
