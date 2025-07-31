const SinglePageCourse = async ({params}) => {
    const goal=await params;
    return (
        <div>
            this is course-{goal.slug}
        </div>
    );
}

export default SinglePageCourse;