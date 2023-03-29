import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware


from common.config import settings
from common.context.ItemFeatures import ItemFeatures
from routers import recommend


def get_application():
    _app = FastAPI(title=settings.PROJECT_NAME)

    _app.add_middleware(
        CORSMiddleware,
        allow_origins=[str(origin) for origin in settings.BACKEND_CORS_ORIGINS],
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )

    # router settings
    _app.include_router(recommend.rec)

    return _app


app = get_application()


@app.on_event("startup")
async def startup_event():
    global item_features
    item_features = ItemFeatures()
    return


@app.get("/")
def home():
    return {"Hello": "word"}


if __name__ == "__main__":
    uvicorn.run(
        "main:app",
        reload=True,
        reload_dirs=["app/"],
    )
