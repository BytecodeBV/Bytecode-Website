/* eslint-disable max-len */
import React from 'react';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../layouts/CaseLayout' was resolved to ... Remove this comment to see the full error message
import Layout from '../../layouts/CaseLayout';
import {
    TextAndImage,
    Introduction,
    Section,
    // @ts-expect-error ts-migrate(6142) FIXME: Module '../../containers/ContentBlocks/ContentBloc... Remove this comment to see the full error message
} from '../../containers/ContentBlocks/ContentBlocks';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../containers/Deliverables' was resolve... Remove this comment to see the full error message
import Deliverables from '../../containers/Deliverables';

const logo = require('../../images/img/cases/mooiwerk/logo.svg');
const home = require('../../images/img/cases/mooiwerk/home.png');
const vacatures = require('../../images/img/cases/mooiwerk/vacatures.png');
const team = require('../../images/img/cases/mooiwerk/team.png');
const advies = require('../../images/img/cases/mooiwerk/advies.png');
const registreren = require('../../images/img/cases/mooiwerk/registreren.png');
const kennis = require('../../images/img/cases/mooiwerk/kennis.png');

const pageSettings = {
    client: 'Mooiwerk Breda',
    description:
        'Door het ontwikkelen van een platform op maat brachten wij de organisaties en vrijwilligers van Breda dichter bij elkaar. Zo maakten wij vrijwilligerswerk toegankelijker. Bekijk hier het resultaat!',
    image: home,
    title: 'MOOIWERK',
    keywords: 'breda actief, mooiwerkbreda, case, bytecode digital agency',
};

const Case = () => (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Layout pageSettings={pageSettings}>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <TextAndImage
            padded
            img={vacatures}
            alt="Brengt Breda dichter bij elkaar"
        >
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <h2>Brengt Breda dichter bij elkaar</h2>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <p className="introduction">
                Door een platform te ontwikkelen waar vrijwilligers en
                organisaties elkaar kunnen vinden maakten wij vrijwilligerswerk
                toegankelijker.
            </p>
        </TextAndImage>

        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Deliverables
            deliverables={[
                'Webapp',
                'Custom CMS',
                'Cloudservers',
                'Doorontwikkeling',
            ]}
            alt="website image mooiwerkbreda"
            clientLogo={logo}
            img={team}
            clientBio="Mooiwerk Breda is een platform van Stichting Breda
                        Actief. Op dit platform kunnen organisaties vacatures
                        plaatsen als zij op zoek zijn naar vrijwilligerswerk,
                        maar ook vrijwilligers kunnen hier terecht om een
                        vrijwilligersbaan te zoeken."
        />
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Section>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <Introduction>
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <h2>De uitdaging</h2>
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <p className="introduction">
                    De belangrijkste reden voor een maatwerkapplicatie, is het
                    kunnen controleren van functionaliteiten en de data.
                </p>
            </Introduction>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <TextAndImage
                img={registreren}
                reverse
                alt="Pagina op de mooiwerkbreda website"
            >
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <p className="subtitle">Research</p>
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <h3>Agile-toepassing</h3>
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <p>
                    Aan de hand van de vastgestelde doelgroep en requirements
                    hebben we een MVP opgesteld van vier sprints. Hierna was er
                    altijd de mogelijkheid voor doorontwikkeling en toekomstige
                    data-analyse hebben we in het achterhoofd gehouden.
                </p>
            </TextAndImage>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <TextAndImage img={kennis} alt="Pagina op de mooiwerkbreda website">
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <p className="subtitle">Development</p>
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <h3>Open source</h3>
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <p>
                    De codebase van het project is open source ontwikkeld. Door
                    goede documentatie is het voor MOOIWERK altijd mogelijk om
                    door te ontwikkelen.
                </p>
            </TextAndImage>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <TextAndImage
                fluid
                img={advies}
                alt="Pagina op de mooiwerkbreda website"
            >
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <p className="subtitle">Resultaten</p>
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <h2>Realiseren</h2>
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <p className="introduction">
                    Het uiteindelijke platform zorgt ervoor dat Mooiwerk Breda
                    organisaties en vrijwilligers in Breda samen kan brengen.
                    Met behulp van de doorgaande ontwikkeling blijven we Breda
                    Actief ondersteunen.
                </p>
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <p>
                    Het resultaat van dit project is te bekijken op
                    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                    <a href="https://mooiwerkbreda.nl">
                        &nbsp;mooiwerkbreda.nl
                    </a>
                    . In overleg met Stichting Breda Actiefis de broncode
                    vrijgegeven onder GPL-3.0 licentie,
                    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                    <a href="https://git.bytecode.nl/breda-actief">
                        &nbsp;hier&nbsp;
                    </a>
                    te bekijken.
                </p>
            </TextAndImage>
        </Section>
    </Layout>
);

export default Case;
