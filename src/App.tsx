import HeaderSection from './components/Header/HeaderSection';
import DescriptionSection from './components/Description/DescriptionSection';
import EventDetails from './components/Program/EventDetails';
import MapSection from './components/Location/MapSection';
import RsvpSection from './components/RSVP/RsvpSection';

export default function App() {
  return (
    <main>
      <HeaderSection />
      <DescriptionSection />
      <EventDetails />
      <MapSection />
      <RsvpSection />
    </main>
  );
}
