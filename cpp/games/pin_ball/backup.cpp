#include<iostream>
#include "raylib.h"
using namespace std;

class Ball {
    float x, y;
    int radius;
    int speed_x, speed_y;
public:
    Ball() {}
    Ball(float x, float y, int radius, int speed_x, int speed_y) : x(x), y(y), radius(radius), speed_x(speed_x), speed_y(speed_y) {};
    void Draw() {
        DrawCircle(x, y, radius, WHITE);
    }
};

class Paddle {
    int x, y;
public:
    static int width, height;
    Paddle() {}
    Paddle(int x, int y) : x(x), y(y) {}
    void Draw() {
    DrawRectangle(x, y, width, height, WHITE);
    }
};

int screen_width = 300;
int screen_height = 800;

Ball ball;
Paddle paddleLeft, paddleRight,paddleTopLeft,paddleTopRight;

int Paddle::height = 10;
int Paddle::width = screen_width / 2 - 20;

int main() {
    const char* title = "Pin Ball Game !";
    InitWindow(screen_width, screen_height, title);
    SetTargetFPS(60);
    ball = Ball(screen_width / 2, screen_height / 2, 10, 7, 7);
    paddleLeft = Paddle(0, screen_height - paddleLeft.height);
    paddleRight = Paddle(screen_width - paddleRight.width, screen_height - paddleRight.height);
    paddleTopLeft = Paddle(0,0);
    paddleTopRight = Paddle(screen_width - paddleTopRight.width,0);

    while(WindowShouldClose()==false)
    {
        BeginDrawing();
        ball.Draw();
        paddleLeft.Draw();
        paddleRight.Draw();
        paddleTopLeft.Draw();
        paddleTopRight.Draw();

        ClearBackground(BLACK);
        EndDrawing();
    }

    CloseWindow();
}