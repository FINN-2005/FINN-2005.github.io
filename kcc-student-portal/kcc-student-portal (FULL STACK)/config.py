# config.py

from pathlib import Path
from pydantic_settings import BaseSettings


BASE_DIR = Path(__file__).resolve().parent


class Settings(BaseSettings):
    APP_NAME: str = "KCC Student Portal"
    DEBUG: bool = True

    DATA_DIR: Path = BASE_DIR / "data"
    STATIC_DIR: Path = BASE_DIR / "static"
    TEMPLATE_DIR: Path = BASE_DIR / "templates"

    SECRET_KEY: str = "change-this-in-production"

    class Config:
        env_file = ".env"


settings = Settings()