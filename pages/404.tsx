import PageTitle from '@components/PageTitle';
import Transition from '@components/Transition';

export default function Custom404() {
  return (
    <Transition>
      <div className="flex justify-center">
        <PageTitle>Not Found</PageTitle>
        <span className="text-3xl font-bold">404 | Ops... Not Found!</span>
      </div>
    </Transition>
  );
}
