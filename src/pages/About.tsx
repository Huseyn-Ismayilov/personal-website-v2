import MyStory from "../components/MyStory"
import BlockTitle from "../components/BlockTitle"
import Certificates from "../components/Certificates"
import Follow from "../components/Follow"
import SkillList from "../components/SkillsList"
import Experience from "../components/Experience"
import Education from "../components/Education"

export default function About() {
    return (
        <>
            <section className="mb-8">
                <div className="container mx-auto">
                    <div className="lg:flex lg:space-x-7">
                        <div className="lg:w-6/12">
                            <BlockTitle
                                title="About me"
                            />
                            <MyStory />
                            <Follow />
                        </div>
                        <div className="lg:w-6/12">
                            <BlockTitle
                                title="Certificates"
                            />
                            <Certificates />
                        </div>
                    </div>
                </div>
            </section>
            <section className="mb-12">
                <div className="container mx-auto">
                    <BlockTitle
                        title="Skills"
                    />
                    <SkillList />
                </div>
            </section>
            <section className="mb-4">
                <div className="container mx-auto">
                    <div className="lg:flex lg:space-x-7">
                        <div className="lg:w-1/2">
                            <BlockTitle
                                title="Experience"
                            />
                            <Experience />
                        </div>
                        <div className="lg:w-1/2">
                            <BlockTitle
                                title="Education"
                            />
                            <Education />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}